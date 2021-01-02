import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { DashboardService } from './dashboard.service'
import { StatisticsResponse, Month } from './dashboard.interface'

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Output() showLoading = new EventEmitter<boolean>()

  statistics$: Observable<StatisticsResponse>
  statistics: StatisticsResponse
  clothesAvailability: { labels: string[][], values: number[] }
  clientAvailabilityMetrics: { labels: string[][], values: number[] }
  clientRegisterMetrics: { label: string, data: Month[] }
  shoppingCarCreatedInCurrentMonth: number
  clientCreatedInCurrentMonth: number
  clientAsExcelAddress: string

  constructor(
    private dashboardService: DashboardService
  ) { }

  async ngOnInit(): Promise<void> {
    this.clientAsExcelAddress = `${environment.BACKEND_ADDRESS}/statistics/clients-as-excel`
    this.statistics$ = this.dashboardService.getStatistics()
    const response = await this.statistics$.toPromise()

    this.clothesAvailability = {
      labels: response.clothes_availability_quantity.map(o => [o.status]),
      values: response.clothes_availability_quantity.map(o => o.quantity)
    } 

    this.clientAvailabilityMetrics = {
      labels: response.client_availability_quantity.map(o => [o.status]),
      values: response.client_availability_quantity.map(o => o.quantity)
    }

    this.shoppingCarCreatedInCurrentMonth = response.number_of_shopping_carts_created_current_month
    this.clientCreatedInCurrentMonth = response.quantity_of_clients_registered_in_current_month

    this.clientRegisterMetrics = {
      label: 'Quantity of clients',
      data: response.client_registered_current_year_by_month.data
    }  

    // this.showLoading.emit(true)
  }

  generatePdf() {
    const div = document.getElementById("html2Pdf");
    const options = {background: "white", height: div.clientHeight, width: div.clientWidth};

    html2canvas(div, options).then((canvas) => {
        let doc = new jsPDF("p", "mm", "a4");
        let imgData = canvas.toDataURL("image/PNG");
        doc.addImage({ imageData: imgData, x: 20, y: 0, width: 170, height: 270 });
        let pdfOutput = doc.output();
        let buffer = new ArrayBuffer(pdfOutput.length);
        let array = new Uint8Array(buffer);
        for (let i = 0; i < pdfOutput.length; i++) {
            array[i] = pdfOutput.charCodeAt(i);
        }
        const fileName = "example.pdf";
        doc.save(fileName);
    });
  }

  async generateExcel() {
    await this.dashboardService.getClientListAsExcel().toPromise()
  }

}
