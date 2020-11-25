import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientFormComponent } from './client-form/client-form.component';
import {
  ClientCreateDTO,
  ClientListDTO,
  ClientStatus,
  ClientUpdateDTO,
} from './client.interfaces';

import { ClientService } from './client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  @ViewChild(ClientFormComponent) clientForm: ClientFormComponent;

  clientList$: Observable<ClientListDTO[]>;
  clientStatusList$: Observable<ClientStatus[]>;

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.getClientList();
    this.clientStatusList$ = this.clientService.statusList();
  }

  getClientList(): void {
    this.clientList$ = this.clientService.list();
  }

  createClient(formValue: ClientCreateDTO): void {
    this.clientService.create(formValue).subscribe(
      () => {
        console.log('Client created successfully');
        this.clientForm.resetForm()
        this.getClientList();
      },
      ({ error }: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }

  async removeClient(client: ClientListDTO): Promise<void> {
    const response = await this.clientService.remove(client.id);
    response.subscribe(
      () => this.getClientList(),
      ({ error }: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }

  updateClient(client: ClientUpdateDTO): void {
    this.clientService.update(client).subscribe(
      (response) => {
        console.log('client updated');
        console.log(response);
        this.clientForm.resetForm();
        this.getClientList();
      },
      ({ error }: HttpErrorResponse) => {
        console.error(error.message);
      }
    );
  }

  async findOne(client: ClientListDTO): Promise<void> {
    try {
      const clientFound = await this.clientService
        .findOne(client.id)
        .toPromise();
      this.clientForm.setClothesToUpdate(clientFound);
    } catch (error) {
      console.error(error.message);
    }
  }
}
