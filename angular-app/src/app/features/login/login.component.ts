import { Component, inject } from '@angular/core';
import { LoginFormComponent } from "./components/login-form.component";
import { AuthService } from '../../core/services/auth.service';
import { LoginRequestDTO } from '../../core/models/dtos/login.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginFormComponent ],
  template: `
  <div class="flex justify-center items-center pt-10">
      <app-login-form (submitLogin)="onSubmitLogin($event)" />
  </div>
  `,
  styles: ``
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  async onSubmitLogin(loginRequest: LoginRequestDTO) {
    try {
      await this.authService.login(loginRequest)
      this.router.navigate(['/jobs']);
    } catch (error) {
      console.error(error);
    }
  }
}
