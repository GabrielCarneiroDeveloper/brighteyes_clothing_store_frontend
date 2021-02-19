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
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
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
        ({ error, status }: HttpErrorResponse) => {
          if (status === 401) {
            alert(error.message);
          } else {
            alert('Credentials invalid or missing');
          }
          // console.error(error);
          this.loginForm.reset();
          this.loading = false;
        }
      );
  }

  isValid(attr: string): string {
    return this.loginForm.get(attr).valid ? 'is-valid' : 'is-invalid';
  }

  showInvalidFeedback(attr: string): boolean {
    return this.isValid(attr) === 'is-invalid' ? true : false;
  }
}
