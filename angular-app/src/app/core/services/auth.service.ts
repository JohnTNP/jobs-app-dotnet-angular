import { inject, Injectable, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom, Observable, tap } from "rxjs";
import { jwtDecode } from "jwt-decode";
import { UserApiService } from "../../shared/services/user-api.service";
import { LoginRequestDTO } from "../models/dtos/login.dto";

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly userApiService = inject(UserApiService);

  isLoggedIn = signal<boolean>(false);

  async login(loginRequest: LoginRequestDTO) {
    try {
      const response = await firstValueFrom(this.userApiService.login(loginRequest))
      const token = response.accessToken;
      localStorage.setItem('token', token);
      this.isLoggedIn.set(true);
    } catch (error) {
      console.error(error);
      this.isLoggedIn.set(false);
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isLoggedIn.set(false);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

}