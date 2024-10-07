import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { LoginRequestDTO, LoginResponseDTO } from "../../core/models/dtos/login.dto";

@Injectable({
    providedIn: 'any',
})
export class UserApiService {
    private readonly httpClient = inject(HttpClient);
    
    private baseUrl = environment.apiUrl;

    login(request: LoginRequestDTO) {
        return this.httpClient.post<LoginResponseDTO>(`${this.baseUrl}/login`, request);
    }

}