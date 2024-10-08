import { Component, output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { CreateJobPostRequestDTO } from "../../../shared/models/dtos/jobs.dto";

@Component({
  selector: 'app-create-job-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, ReactiveFormsModule],
  template: `
  <mat-card class="w-96">
    <form [formGroup]="createJobForm" (submit)="onSubmit($event)">
      <mat-card-header>
        <mat-card-title>Create Job</mat-card-title>
      </mat-card-header>
      <mat-card-content>
          <div class="flex flex-col gap-4">
            <mat-form-field>
              <mat-label>Title</mat-label>
              <input matInput formControlName="title" />  
            </mat-form-field>
            <mat-form-field>
              <mat-label>Description</mat-label>
              <input matInput formControlName="description" />
            </mat-form-field>
            <mat-form-field>
              <mat-label>Location</mat-label>
              <input matInput formControlName="location" placeholder="Leave blank if location is Remote" />
            </mat-form-field>
          </div>
      </mat-card-content>
      <mat-card-actions>
        <button mat-flat-button color="primary" type="submit">Create</button>
      </mat-card-actions>
    </form>
  </mat-card>
  `,
})
export class CreateJobFormComponent {
  submitCreateJob = output<CreateJobPostRequestDTO>()

  createJobForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    location: new FormControl(''),
  });

  onSubmit(e: Event) {
    e.preventDefault();

    if (!this.createJobForm.valid) {
      throw new Error('Form is invalid');
    }

    const { title, description, location } = this.createJobForm.value;
    if (!title || !description) {
      throw new Error('Title and description are required');
    }

    this.submitCreateJob.emit({
      title,
      description,
      location: location ?? null,
    });
  }
}
