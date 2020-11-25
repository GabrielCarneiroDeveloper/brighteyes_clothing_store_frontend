import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ClothesFormComponent } from './clothes-form/clothes-form.component';
import {
  ClothesCreateDTO,
  ClothesDetailsDTO,
  ClothesListDTO,
  ClothesStatus,
  ClothesUpdateDTO,
} from './clothes.interface';

import { ClothesService } from './clothes.service';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss'],
})
export class ClothesComponent implements OnInit {
  @ViewChild(ClothesFormComponent) clothesForm: ClothesFormComponent;

  clothesList$: Observable<ClothesListDTO[]>;
  clothesStatusList$: Observable<ClothesStatus[]>;

  constructor(private clothesService: ClothesService) {}

  ngOnInit(): void {
    this.getClothesList();
    this.clothesStatusList$ = this.clothesService.statusList();
  }

  createClothes(formValue: ClothesCreateDTO): void {
    this.clothesService.create(formValue).subscribe(
      () => {
        console.log('Clothes created successfully');
        this.getClothesList();
      },
      ({ error }: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }

  getClothesList(): void {
    this.clothesList$ = this.clothesService.list();
  }

  removeClothes(clothes: ClothesListDTO): void {
    this.clothesService.remove(clothes.id).subscribe(
      () => this.getClothesList(),
      ({ error }: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }

  updateClothes(clothes: ClothesUpdateDTO): void {
    this.clothesService.update(clothes).subscribe(
      (response) => {
        console.log('clothes updated');
        console.log(response);
        this.clothesForm.resetForm();
        this.getClothesList();
      },
      ({ error }: HttpErrorResponse) => {
        console.error(error.message);
      }
    );
  }

  async findOne(clothes: ClothesListDTO): Promise<void> {
    try {
      const clothesFound = await this.clothesService
        .findOne(clothes.id)
        .toPromise();
      this.clothesForm.setClothesToUpdate(clothesFound);
    } catch (error) {
      console.error(error.message);
    }
  }
}
