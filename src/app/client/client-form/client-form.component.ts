import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {
  dateParser,
  parseFromISOToLocaleDate,
} from 'src/app/common/dateFormatter';
import {
  ClientCreateDTO,
  ClientDetailsDTO,
  ClientStatus,
  ClientUpdateDTO,
} from '../client.interfaces';
// import * as moment from 'moment'

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent implements OnInit {
  formGroup: FormGroup;
  isUpdating: boolean;

  @Input() statusList: Observable<ClientStatus[]>;

  @Output() createObject = new EventEmitter<ClientCreateDTO>();
  @Output() updateObject = new EventEmitter<ClientUpdateDTO>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      id: [null],
      name: [null, [Validators.required]],
      address: [null, [Validators.required]],
      cpf: [
        null,
        [Validators.required, Validators.pattern(/^(\d{3}\.){2}\d{3}\-\d{2}$/)],
      ],
      birthdate: [
        null,
        [Validators.required, Validators.pattern(/^(\d{2}\/){2}\d{4}$/)],
      ],
      status: [null, [Validators.required]],
    });
    this.isUpdating = false;
    // this.formGroup.patchValue(clientMock);
    // this.formGroup.patchValue(clientMock)
  }

  isValid(attr: string): string {
    return this.formGroup.get(attr).valid ? 'is-valid' : 'is-invalid';
  }

  showInvalidFeedback(attr: string): boolean {
    return this.isValid(attr) === 'is-invalid' ? true : false;
  }

  async sendForm(): Promise<void> {
    try {
      if (this.formGroup.invalid) return;
      const form = this.formGroup.value;
      // form.birthdate = dateParser(form.birthdate);
      if (!this.isUpdating) {
        this.createObject.next(form);
      } else {
        this.updateObject.next(form);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  setClothesToUpdate(client: ClientDetailsDTO) {
    this.isUpdating = true;
    this.formGroup.patchValue(client);
    this.formGroup.patchValue({ status: client.status.id });
    // this.formGroup.patchValue({
    //   birthdate: parseFromISOToLocaleDate(client.birthdate),
    // });
  }

  resetForm(): void {
    this.formGroup.reset();
    this.isUpdating = false;
  }
}
