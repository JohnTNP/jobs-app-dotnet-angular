import { Component, inject } from "@angular/core";
import { CreateJobFormComponent } from "./components/create-job-form.component";
import { JobsApiService } from "../../shared/services/jobs-api.service";
import { CreateJobPostRequestDTO } from "../../shared/models/dtos/jobs.dto";
import { firstValueFrom } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-job',
  standalone: true,
  imports: [CreateJobFormComponent],
  template: `
  <div class="flex justify-center items-center pt-10">
      <app-create-job-form (submitCreateJob)="onSubmit($event)"></app-create-job-form>
  </div>
  `,
})
export class CreateJobComponent {
  private readonly jobsApiService = inject(JobsApiService);
  private readonly router = inject(Router);

  async onSubmit(jobPost: CreateJobPostRequestDTO) {
    try {
      await firstValueFrom(this.jobsApiService.createJob(jobPost))
      this.router.navigate(['/jobs']);
    } catch (error) {
      console.error(error);
    }
  }
}
