import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { ClothesListDTO } from '../clothes.interface';

@Component({
  selector: 'app-clothes-table',
  templateUrl: './clothes-table.component.html',
  styleUrls: ['./clothes-table.component.scss'],
})
export class ClothesTableComponent {
  @Input() clothesList: Observable<ClothesListDTO[]>;

  @Output() removeObject = new EventEmitter<ClothesListDTO>();
  @Output() findOne = new EventEmitter<ClothesListDTO>();

  constructor() {}

  removeButtonClicked(clothes: ClothesListDTO): void {
    this.removeObject.next(clothes);
  }

  updateButtonClicked(clothes: ClothesListDTO): void {
    this.findOne.next(clothes);
  }
}
