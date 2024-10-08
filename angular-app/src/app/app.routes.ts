import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { JobsComponent } from './features/jobs/jobs.component';
import { authGuard } from './core/guards/auth.guard';
import { CreateJobComponent } from './features/create-job/create-job.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'jobs',
        component: JobsComponent,
        canActivate: [authGuard]
    },
    {
        path: 'create-job',
        component: CreateJobComponent,
        canActivate: [authGuard]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
