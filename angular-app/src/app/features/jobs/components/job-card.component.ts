import { Component, input } from "@angular/core";
import { JobPost } from "../models/job-post.model";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  template: `
  <div class="flex justify-center">
    <mat-card class="w-full max-w-xl" appearance="outlined">
      <mat-card-header>
        <mat-card-title>{{ jobPost().title }}</mat-card-title>
        <mat-card-subtitle>
          <div class="flex items-center gap-1">
            <mat-icon>location_on</mat-icon>
            {{ jobPost().location ?? 'Remote' }}
          </div>
        </mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <p>{{ jobPost().description }}</p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-stroked-button color="primary">Apply</button>
      </mat-card-actions>
    </mat-card>
  </div>
  `,
})
export class JobCardComponent {
  jobPost = input.required<JobPost>() 
}