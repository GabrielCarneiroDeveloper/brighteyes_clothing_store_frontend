import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientListDTO } from '../client.interfaces';
import { parseFromISOToLocaleDate } from './../../common/dateFormatter';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss'],
})
export class ClientTableComponent {
  @Input() clientList: Observable<ClientListDTO[]>;

  @Output() findOne = new EventEmitter<ClientListDTO>();
  @Output() changeStatus = new EventEmitter<ClientListDTO>();

  updateButtonClicked(client: ClientListDTO): void {
    this.findOne.next(client);
  }

  changeStatusButtonClicked(client: ClientListDTO) {
    this.changeStatus.next(client);
  }

  parseIsoToLocale(date: string) {
    return parseFromISOToLocaleDate(date);
  }
}
