import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SessionService } from './../../common/services/session.service';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

/**
 * se o usuario nao estiver logado, soh pode acessar de fotos, login e signup
 */
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private sessionService: SessionService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.sessionService.isLogged()) {
      this.router.navigate(['auth']);
      return false;
    }
    return true;
  }
}
