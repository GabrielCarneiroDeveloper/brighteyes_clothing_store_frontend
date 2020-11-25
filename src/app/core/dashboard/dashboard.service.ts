import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { 
  StatisticsResponse
} from './dashboard.interface'
import { environment } from './../../../environments/environment'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  getStatistics(): Observable<StatisticsResponse> {
    return this.httpClient.get<{ data: StatisticsResponse }>(`${environment.BACKEND_ADDRESS}/statistics`)
      .pipe(map(
        (response: { data: StatisticsResponse }) => response.data
      ))
  }

  getClientListAsExcel(): Observable<any> {
    return this.httpClient.get(
      `${environment.BACKEND_ADDRESS}/statistics/clients-as-excel`,
      { responseType: 'blob'}
    )
  }
}
