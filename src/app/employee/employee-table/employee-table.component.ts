import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EmployeeRemoveDTO, EmployeeUpdateDTO } from '../employee.interfaces';

import { Employee } from '../employee.models';
import { debounceTime } from 'rxjs/operators';
import { parseFromISOToLocaleDate } from 'src/app/common/dateFormatter';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss'],
})
export class EmployeeTableComponent implements OnDestroy {
  @Input() employeeList: Observable<Employee[]>;

  @Output() removeObject = new EventEmitter<EmployeeRemoveDTO>();
  @Output() findOne = new EventEmitter<EmployeeUpdateDTO>();
  @Output() startLoading = new EventEmitter<void>();

  value: string = '';
  debounce: Subject<string> = new Subject<string>();

  /**
   * necessário implementar a lógica do search input
   */
  // async ngOnInit(): Promise<void> {
  //   this.debounce.pipe(debounceTime(300)).subscribe((filter) => {
  //     console.log(filter);
  //   });
  // }

  ngOnDestroy(): void {
    /**
     *  evitando Memory Leak
     */
    this.debounce.unsubscribe();
  }

  removeButtonClicked(employee: EmployeeRemoveDTO) {
    this.removeObject.next(employee);
  }

  updateButtonClicked(employee: EmployeeUpdateDTO) {
    this.findOne.next(employee);
  }

  parseIsoToLocale(date: string) {
    return parseFromISOToLocaleDate(date);
  }
}
