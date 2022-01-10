import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';
import { LoginPageValidator } from './login-page.validator';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  $sub!: Subscription;

  constructor(
    private router: Router,
    private auth: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        LoginPageValidator.password,
      ]),
    });

    this.route.queryParams.subscribe((params: Params) => {
      if (params['registered']) {
        this.form.getRawValue().email = params['email'];
      } else if (params['accessDenied']) {
        this.form.getRawValue().email = params['email'];
      }
    });
  }

  onSubmit(): void {
    this.form.disable();

    const user = {
      email: this.form.getRawValue().email,
      password: this.form.getRawValue().password,
    };

    this.$sub = this.auth.login(user).subscribe(
      () => {
        console.log('login success');
        this.router.navigate(['/overview']);
      },
      (error) => {
        console.log('login error', error);
        this.form.enable();
      }
    );
  }

  ngOnDestroy(): void {
    if (this.$sub) {
      this.$sub.unsubscribe();
    }
  }
}
