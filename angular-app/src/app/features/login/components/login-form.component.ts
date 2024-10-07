import { Component, output } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { LoginRequestDTO } from "../../../core/models/dtos/login.dto";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, ReactiveFormsModule],
  template: `
  <mat-card class="w-80">
    <form (submit)="onSubmit($event)" [formGroup]="loginForm">
      <mat-card-header>
        <mat-card-title>Login</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <div class="flex flex-col">
          <mat-form-field>
            <mat-label>Email</mat-label>
            <input matInput type="email" formControlName="email" />
          </mat-form-field>
          <mat-form-field>
            <mat-label>Password</mat-label>
            <input matInput type="password" formControlName="password" />
          </mat-form-field>
        </div>
      </mat-card-content>
      <mat-card-actions>
        <button mat-flat-button color="primary" type="submit">Login</button>
      </mat-card-actions>
    </form>
  </mat-card>
  `,
})
export class LoginFormComponent {
  submitLogin = output<LoginRequestDTO>()

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit(e: Event) {
    e.preventDefault();

    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.loginForm.value;
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    this.submitLogin.emit({
      email,
      password,
    });
  }
}
