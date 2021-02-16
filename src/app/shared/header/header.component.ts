import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  DataStoredInToken,
  SessionService,
} from 'src/app/common/services/session.service';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  session: DataStoredInToken;
  showFiller = false;

  ngOnInit(): void {
    this.session = this.sessionService.decodeSession();
  }

  logOut(): void {
    this.sessionService.logOut();
    this.router.navigate(['auth']);
  }

  mobileQuery: MediaQueryList;

  // fillerNav = Array.from({ length: 3 }, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private sessionService: SessionService,
    private router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some((h) =>
  //   h.test(window.location.host)
  // );
}
