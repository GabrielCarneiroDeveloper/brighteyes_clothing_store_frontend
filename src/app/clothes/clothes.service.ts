import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { SuccessfullyResponse } from '../common/interfaces';
import {
  Clothes,
  ClothesCreateDTO,
  ClothesDetailsDTO,
  ClothesListDTO,
  ClothesStatus,
  ClothesUpdateDTO,
} from './clothes.interface';

interface CreatedSuccessfullyResponse extends SuccessfullyResponse<Clothes> {}
interface UpdatedSuccessfullyResponse extends SuccessfullyResponse<Clothes> {}
interface RemovedSuccessfullyResponse
  extends Omit<SuccessfullyResponse<Clothes>, 'data'> {}

@Injectable({
  providedIn: 'root',
})
export class ClothesService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = `${environment.BACKEND_ADDRESS}/clothes`;
  }

  list(): Observable<ClothesListDTO[]> {
    return this.httpClient.get<ClothesListDTO[]>(this.baseUrl).pipe(
      map((clothesList) =>
        clothesList.map((clothes) => {
          if (
            !clothes.photo.includes('http') ||
            !clothes.photo.includes('https')
          ) {
            clothes.photo = environment.BACKEND_ADDRESS +
              '/images/clothes/' +
              clothes.photo;
          }
          return clothes;
        })
      )
    );
  }

  findOne(clothesId: number): Observable<ClothesDetailsDTO> {
    return this.httpClient.get<ClothesDetailsDTO>(
      `${this.baseUrl}/${clothesId}`
    );
  }

  statusList(): any {
    return this.httpClient.get<ClothesStatus>(`${this.baseUrl}-status`);
  }

  create(
    formValues: ClothesCreateDTO
  ): Observable<CreatedSuccessfullyResponse> {
    return this.httpClient.post<CreatedSuccessfullyResponse>(
      this.baseUrl,
      formValues
    );
  }

  remove(clothesId: number): Observable<RemovedSuccessfullyResponse> {
    return this.httpClient.delete<RemovedSuccessfullyResponse>(
      `${this.baseUrl}/${clothesId}`
    );
  }

  update(
    formValues: ClothesUpdateDTO
  ): Observable<UpdatedSuccessfullyResponse> {
    return this.httpClient.put<UpdatedSuccessfullyResponse>(
      `${this.baseUrl}/${formValues.id}`,
      formValues
    );
  }
}
