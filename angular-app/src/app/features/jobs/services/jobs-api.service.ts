import { inject, Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { CreateJobPostRequestDTO, GetJobsResponseDTO } from "../models/dtos/jobs.dto";
import { GeneralResponseDTO } from "../../../shared/models/dtos/general-response.dto";

@Injectable({
  providedIn: 'any'
})
export class JobsApiService {
  private readonly httpClient = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;

  getAllJobs() {
    return this.httpClient.get<GetJobsResponseDTO>(this.baseUrl + '/api/jobpost/jobs');
  }

  createJob(job: CreateJobPostRequestDTO) {
    return this.httpClient.post<GeneralResponseDTO<null>>(this.baseUrl + '/api/jobpost/create', job);
  }
}