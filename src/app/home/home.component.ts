import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  SessionService,
  DataStoredInToken,
} from '../common/services/session.service';
import { EmployeeTitleEnum } from '../employee/employee.enum';
import * as $ from 'jquery';
import { LoadingService } from '../shared/loading/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  session: DataStoredInToken;

  constructor(
    private sessionService: SessionService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.session = this.sessionService.decodeSession();
    $('#menu-toggle').click(function (e) {
      e.preventDefault();
      $('#wrapper').toggleClass('toggled');
    });

    this.loadingService.stop();
  }
}
