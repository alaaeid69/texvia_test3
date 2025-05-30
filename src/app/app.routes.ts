import { RouterModule,  Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/DashBoard-pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
   children:[
    {path: '' , redirectTo:'dashboard-home' , pathMatch:'full'},
    {
        path: 'dashboard-home',
        loadComponent: () => import('./pages/DashBoard-pages/dashboard-Home/dashboard.component').then(m => m.DashboardComponent),
      },
      {
        path: 'users',
        loadComponent: () => import('./pages/DashBoard-pages/dashboard-users/dashboard-users.component').then(m => m.DashboardUsersComponent),
      },
      {
        path: 'contact-submission',
        loadComponent: () => import('./pages/DashBoard-pages/dashdoard-contact-submissions/dashdoard-contact-submissions.component').then(m => m.DashdoardContactSubmissionsComponent),
      },
   ]
    
  },
  {
    path: 'home',
    component: HomeComponent,
    // title: 'Home',
  },

  {
    path: 'solutions',
    loadComponent: () => import('./pages/solutions/solutions.component').then(m => m.SolutionsComponent),
    // title: 'Solutions',
  },
  {
    path: 'industries',
    loadComponent: () => import('./pages/industries/industries.component').then(m => m.IndustriesComponent),
    // title: 'Industries',
  },
  {
    path: 'courses',
    loadComponent: () => import('./pages/courses/courses.component').then(m => m.CoursesComponent),
    // title: 'Courses',
  },
  
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact-us/contact-us.component').then(m => m.ContactUsComponent),
    // title: 'contact  ',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
    // title: 'Login',
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent),
    // title: 'Register',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];


