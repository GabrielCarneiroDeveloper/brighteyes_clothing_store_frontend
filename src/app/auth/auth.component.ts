import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../common/services/session.service';
import { AuthService } from './auth.service';

interface TokenData {
  token: string;
  expiresIn: number;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;
  loading: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private sessionService: SessionService,
    private router: Router // private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]], // hr@brighteyes.com
      password: ['', [Validators.required]], // senha123
    });
    this.loading = false;
  }

  login(): void {
    this.loading = true;
    this.authService
      .login({
        email: this.loginForm.controls.email.value,
        password: this.loginForm.controls.password.value,
      })
      .subscribe(
        (token: TokenData) => {
          console.log('Employee logged in successfully');
          this.sessionService.createSession(token);
          this.router.navigate(['home']);
          this.loading = false;
        },
        ({ error }: HttpErrorResponse) => {
          console.error(error.message);
          this.loading = false;
        }
      );
  }
}
