import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Client } from 'src/app/client/client.interfaces';
import { EmployeeTitleEnum } from 'src/app/employee/employee.enum';
import { Employee } from 'src/app/employee/employee.models';
import {
  ShoppingCart,
  ShoppingCartCreateDTO,
  ShoppingCartStatus,
  ShoppingCartUpdateDTO,
} from '../shopping-cart.interface';

@Component({
  selector: 'app-shopping-cart-form',
  templateUrl: './shopping-cart-form.component.html',
  styleUrls: ['./shopping-cart-form.component.scss'],
})
export class ShoppingCartFormComponent implements OnInit {
  formGroup: FormGroup;
  isUpdating: boolean;

  @Output() registerShoppingCart = new EventEmitter<ShoppingCartCreateDTO>();
  @Output() updateShoppingCart = new EventEmitter<ShoppingCartUpdateDTO>();

  @Input() sellerEmployeeList: Promise<Employee[]>;
  @Input() shoppingCartStatusList: Observable<ShoppingCartStatus[]>;
  @Input() clientList: Observable<Client[]>;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.isUpdating = false;
    this.formGroup = this.fb.group({
      id: [null],
      client: [null, [Validators.required]],
      seller: [null, [Validators.required]],
      status: [2, [Validators.required]],
    });

    this.sellerEmployeeList = this.sellerEmployeeList.then((employees) =>
      employees.filter((employee) => {
        if (employee.title.name === EmployeeTitleEnum.SELLER) return employee;
      })
    );
  }

  isValid(attr: string): string {
    return this.formGroup.get(attr).valid ? 'is-valid' : 'is-invalid';
  }

  showInvalidFeedback(attr: string): boolean {
    return this.isValid(attr) === 'is-invalid' ? true : false;
  }

  resetForm(): void {
    this.isUpdating = false;
    this.formGroup.reset();
  }

  loadFormWithObject(shoppingCart: ShoppingCart): void {
    this.isUpdating = true;
    this.formGroup.patchValue({ id: shoppingCart.id });
    this.formGroup.patchValue({ client: shoppingCart.client.id });
    this.formGroup.patchValue({ status: shoppingCart.status.id });
    this.formGroup.patchValue({ seller: shoppingCart.seller.id });
  }

  sendShoppingCartForm(): void {
    const formValue = this.formGroup.value;
    if (this.isUpdating) {
      delete formValue.clothes;
      this.updateShoppingCart.next(formValue);
    } else {
      formValue.clothes = [];
      this.registerShoppingCart.next(formValue);
    }
  }
}
