import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule],
  template: `
  <div class="justify-center items-center flex flex-col pt-10">
    <mat-card class="w-1/2 max-w-md p-4">
      <mat-card-header>
        <mat-card-title>Welcome to the Job Portal App</mat-card-title>
      </mat-card-header>
      <mat-card-content class="mt-4">
        <p>
          This is a job portal app that allows you to search for jobs and apply to them.
        </p>
      </mat-card-content>
    </mat-card>
  </div>
  `,
})
export class HomeComponent {

}
