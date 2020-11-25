import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientListDTO } from '../client.interfaces';
import { parseFromISOToLocaleDate } from './../../common/dateFormatter'

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss'],
})
export class ClientTableComponent {
  @Input() clientList: Observable<ClientListDTO[]>;

  @Output() removeObject = new EventEmitter<ClientListDTO>();
  @Output() findOne = new EventEmitter<ClientListDTO>();

  removeButtonClicked(client: ClientListDTO): void {
    this.removeObject.next(client);
  }

  updateButtonClicked(client: ClientListDTO): void {
    this.findOne.next(client);
  }

  parseIsoToLocale(date: string) {
    return parseFromISOToLocaleDate(date)
  }
}
