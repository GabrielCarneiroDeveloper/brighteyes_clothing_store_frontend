import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import {
  Client,
  ClientCreateDTO,
  ClientStatus,
  ClientUpdateDTO,
} from './client.interfaces';

interface CreatedClientSuccessfullyResponse extends Client {}
interface UpdatedClientSuccessfullyResponse extends Client {}
interface RemovedClientSuccessfullyResponse {
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = `${environment.BACKEND_ADDRESS}/clients`;
  }

  list(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.baseUrl);
  }

  findOne(id: number): Observable<Client> {
    return this.httpClient.get<Client>(`${this.baseUrl}/${id}`);
  }

  statusList(): Observable<ClientStatus[]> {
    return this.httpClient.get<ClientStatus[]>(
      `${environment.BACKEND_ADDRESS}/employee-client-status`
    );
  }

  create(
    formValues: ClientCreateDTO
  ): Observable<CreatedClientSuccessfullyResponse> {
    return this.httpClient.post<CreatedClientSuccessfullyResponse>(
      this.baseUrl,
      formValues
    );
  }

  async remove(
    id: number
  ): Promise<Observable<RemovedClientSuccessfullyResponse>> {
    // return this.httpClient.delete<RemovedClientSuccessfullyResponse>(
    //   `${this.baseUrl}/${id}`
    // );
    const statusList = await this.getStatusList().toPromise();
    const deactivatedStatus = statusList.filter(
      (status) => status.name === 'DEACTIVATED'
    )[0];
    return this.httpClient.put<RemovedClientSuccessfullyResponse>(
      `${this.baseUrl}/${id}`,
      {
        status: deactivatedStatus.id,
      }
    );
  }

  update(
    formValues: ClientUpdateDTO
  ): Observable<UpdatedClientSuccessfullyResponse> {
    return this.httpClient.put<UpdatedClientSuccessfullyResponse>(
      `${this.baseUrl}/${formValues.id}`,
      formValues
    );
  }

  getStatusList(): Observable<ClientStatus[]> {
    try {
      return this.httpClient.get<ClientStatus[]>(
        `${environment.BACKEND_ADDRESS}/employee-client-status`
      );
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
