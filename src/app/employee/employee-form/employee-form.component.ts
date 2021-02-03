import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import {
  EmployeeCreateDTO,
  EmployeeStatus,
  EmployeeTitle,
} from '../employee.interfaces';
import { Employee } from '../employee.models';

const employeeMock = {
  name: 'Employee 007',
  email: 'employee007@gmail.com',
  password: 'senha123',
  birthdate: '18/12/1988',
  registeredBy: 1,
  status: 2,
  title: 4,
};

const EmployeeCreateDtoDefaultValues = {
  name: '',
  birthdate: null,
  email: '',
  password: '',
  registeredBy: null,
  status: null,
  title: null,
} as EmployeeCreateDTO;

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  formGroup: FormGroup;
  isUpdating: boolean;

  @Input() employeeStatusList: Observable<EmployeeStatus[]>;
  @Input() employeeTitleList: Observable<EmployeeTitle[]>;
  @Input() hrEmployeeList: Employee[];

  @Output() createEmployee = new EventEmitter<EmployeeCreateDTO>();
  @Output() updateEmployee = new EventEmitter<EmployeeCreateDTO>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.isUpdating = false;
    this.formGroup = this.fb.group({
      id: [null],
      name: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      status: [null, [Validators.required]],
      birthdate: [
        null,
        [Validators.required, Validators.pattern(/^(\d{2}\/){2}\d{4}$/)],
      ],
      password: [null, [Validators.required]],
      title: [null, [Validators.required]],
      registeredBy: [null, [Validators.required]],
    });

    this.formGroup.get('id').valueChanges.subscribe((value) => {
      if (value) {
        this.formGroup.get('password').clearValidators();
      } else {
        this.formGroup.get('password').setValidators(Validators.required);
      }
      this.formGroup.get('password').updateValueAndValidity();
    });
  }

  isValid(attr: string): string {
    return this.formGroup.get(attr).valid ? 'is-valid' : 'is-invalid';
  }

  showInvalidFeedback(attr: string): boolean {
    return this.isValid(attr) === 'is-invalid' ? true : false;
  }

  sendEmployee(): void {
    const form = this.formGroup.value;
    // form.birthdate = dateFormatter(this.formGroup.controls.birthdate.value);
    // form.birthdate = dateParser(form.birthdate);
    try {
      if (!this.isUpdating) {
        this.createEmployee.next(form);
      } else {
        this.updateEmployee.next(form);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  setEmployeeToUpdate(employee: Employee): void {
    this.isUpdating = true;
    this.formGroup.patchValue(employee);
    this.formGroup.patchValue({ title: employee.title.id });
    this.formGroup.patchValue({ status: employee.status.id });
    this.formGroup.patchValue({ registeredBy: employee.registeredBy?.id });
    // this.formGroup.patchValue({ birthdate: parseFromISOToLocaleDate(employee.birthdate) })
  }

  resetForm(): void {
    this.formGroup.reset();
    this.isUpdating = false;
  }

  // teste(): void {
  //   console.log(this.formGroup.get('id').errors);
  //   console.log(this.formGroup.get('name').errors);
  //   console.log(this.formGroup.get('email').errors);
  //   console.log(this.formGroup.get('status').errors);
  //   console.log(this.formGroup.get('birthdate').errors);
  //   console.log(this.formGroup.get('password').errors);
  //   console.log(this.formGroup.get('title').errors);
  //   console.log(this.formGroup.get('registeredBy').errors);
  // }
}
