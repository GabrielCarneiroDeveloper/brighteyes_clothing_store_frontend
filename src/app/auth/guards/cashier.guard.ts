import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable } from 'rxjs';
import { EmployeeTitleEnum } from 'src/app/employee/employee.enum';

import {
  DataStoredInToken,
  SessionService,
} from './../../common/services/session.service';

@Injectable({
  providedIn: 'root',
})
export class CashierGuard implements CanActivate {
  session: DataStoredInToken;

  constructor(private sessionService: SessionService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    this.session = this.sessionService.decodeSession();
    if (
      [
        EmployeeTitleEnum.CASHIER.valueOf(),
        EmployeeTitleEnum.ADMIN.valueOf(),
      ].includes(this.session.title)
    ) {
      return true;
    }
    this.router.navigate(['home']);
    return false;
  }
}
