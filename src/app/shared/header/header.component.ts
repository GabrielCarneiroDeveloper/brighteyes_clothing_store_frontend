import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  DataStoredInToken,
  SessionService,
} from 'src/app/common/services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  session: DataStoredInToken;

  constructor(private sessionService: SessionService, private router: Router) {}

  ngOnInit(): void {
    this.session = this.sessionService.decodeSession();
  }

  logOut(): void {
    this.sessionService.logOut();
    this.router.navigate(['auth']);
  }
}
