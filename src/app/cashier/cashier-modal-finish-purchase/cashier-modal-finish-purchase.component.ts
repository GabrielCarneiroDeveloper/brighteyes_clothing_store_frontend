import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { Clothes } from 'src/app/clothes/clothes.interface';
import { calcTotalCost } from 'src/app/common/calcTotalCost';
import { ShoppingCart } from 'src/app/shopping-cart/shopping-cart.interface';

@Component({
  selector: 'app-cashier-modal-finish-purchase',
  templateUrl: './cashier-modal-finish-purchase.component.html',
  styleUrls: ['./cashier-modal-finish-purchase.component.scss'],
})
export class CashierModalFinishPurchaseComponent implements OnInit {
  modalRef: BsModalRef;
  totalCost: number;
  differenceCost = 0.0;

  @Input() shoppingCart: ShoppingCart;

  @Output() sendPayment = new EventEmitter<{
    isOk: boolean;
    shoppingCartId: number;
  }>();

  @ViewChild('lgModal', { static: false }) lgModal: ModalDirective;

  constructor() {}

  ngOnInit(): void {
    this.totalCost = calcTotalCost(this.shoppingCart.clothes);
    this.calcTotalPayed(0);
  }

  showModal(): void {
    this.lgModal.show();
  }

  hideModal(): void {
    this.lgModal.hide();
  }

  calcTotalPayed(payed: number): void {
    this.differenceCost = Number(Number(payed - this.totalCost).toFixed(2));
  }

  paymentButtonClicked(): void {
    this.sendPayment.next({
      isOk: this.differenceCost >= 0,
      shoppingCartId: this.shoppingCart.id,
    });
  }
}
