import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  BsModalRef,
  ModalDirective,
} from 'ngx-bootstrap/modal';
import { Clothes } from 'src/app/clothes/clothes.interface';
import { environment } from 'src/environments/environment';
import { ShoppingCart } from '../shopping-cart.interface';

@Component({
  selector: 'app-shopping-cart-modal',
  templateUrl: './shopping-cart-modal.component.html',
  styleUrls: ['./shopping-cart-modal.component.scss'],
})
export class ShoppingCartModalComponent implements OnInit {
  modalRef: BsModalRef;
  totalCost: number;
  searchInputValue: number;
  formGroup: FormGroup;

  @ViewChild('lgModal', { static: false }) lgModal: ModalDirective;

  @Input() shoppingCart: ShoppingCart;

  @Output() addClothes = new EventEmitter<{
    requestedClothesId: number;
    shoppingCartId: number;
  }>();
  @Output() removeClothes = new EventEmitter<{
    requestedClothesId: number;
    shoppingCartId: number;
  }>();

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.totalCost = 0;
    this.calcTotalCost();
    this.formGroup = this.fb.group({
      searchInput: [null],
    });
  }

  showModal(): void {
    this.lgModal.show();
  }

  hideModal(): void {
    this.lgModal.hide();
  }

  calcTotalCost(): void {
    this.shoppingCart.clothes.forEach((c) => {
      this.totalCost = this.totalCost + c.price;
    });
  }

  addClothesButtonClicked(): void {
    const inputValue = parseInt(this.formGroup.controls.searchInput.value);
    if (!inputValue) return;
    this.addClothes.next({
      requestedClothesId: inputValue,
      shoppingCartId: this.shoppingCart.id,
    });
    this.resetForm();
  }

  removeClothesButtonClicked(clothes: Clothes): void {
    this.removeClothes.next({
      requestedClothesId: clothes.id,
      shoppingCartId: this.shoppingCart.id,
    });
    this.resetForm();
  }

  resetForm(): void {
    this.searchInputValue = null;
  }

  fixClothesPhotoAddress(clothes: Clothes) {
    return clothes.photo.includes('http') ? 
      clothes.photo : 
      `${environment.BACKEND_ADDRESS}/images/clothes/${clothes.photo}`
  }
}
