import { Component, inject, OnInit, signal } from '@angular/core';
import { JobsApiService } from './services/jobs-api.service';
import { JobPost } from './models/job-post.model';
import { firstValueFrom } from 'rxjs';
import { JobCardComponent } from './components/job-card.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [JobCardComponent, MatButtonModule, MatIconModule],
  template: `
  <div class="flex flex-col p-4 gap-4 justify-center w-screen">
    @for (item of jobs(); track $index) {
      <app-job-card [jobPost]="item"></app-job-card>
    }
    <div class="fixed bottom-10 right-10">
      <button mat-fab>
        <mat-icon>add</mat-icon>
      </button>
    </div>
  </div>
  `,
})
export class JobsComponent implements OnInit {
  private readonly jobsApiService = inject(JobsApiService);
  
  protected jobs = signal<JobPost[]>([]);

  ngOnInit() {
    this.getAllJobs();
  }

  private async getAllJobs() {
    try {
      const response = await firstValueFrom(this.jobsApiService.getAllJobs());
      this.jobs.set(response.jobs);
    } catch (error) {
      console.error(error);
    }
  }

}
