import { Component } from "@angular/core";
import { RouterLinkActive, RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterModule, RouterLinkActive],
  template: `
    <mat-toolbar class="flex gap-2">
      <button mat-button class="transition-all" [routerLinkActive]="['active']" routerLink="/home">Home</button>
      <button mat-button class="transition-all" [routerLinkActive]="['active']" routerLink="/jobs">Jobs</button>
    </mat-toolbar>
  `,
  styles: [
    `
    .active {
      color: white !important;
      background-color: #ba005c ;
    }
    `
  ]
})
export class NavBarComponent {}