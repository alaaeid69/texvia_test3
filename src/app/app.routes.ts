import { Routes } from '@angular/router'

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        title: 'Home',
      },
       {
        path: 'solutions',
        loadComponent: () => import('./pages/solutions/solutions.component').then(m => m.SolutionsComponent),
        title: 'Solutions',
      },
      {
        path: 'industries',
        loadComponent: () => import('./pages/industries/industries.component').then(m => m.IndustriesComponent),
        title: 'Industries',
      },
      {
        path: 'courses',
        loadComponent: () => import('./pages/courses/courses.component').then(m => m.CoursesComponent),
        title: 'courses',
      },
       {
        path: 'services',
        loadComponent: () => import('./pages/how-we-deliver-value/how-we-deliver-value.component').then(m => m.HowWeDeliverValueComponent),
        title: 'services',
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about-us/about-us.component').then(m => m.AboutUsComponent),
        title: 'AboutUs',
      },
      
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
        title: 'login',
      },
      {
        path: 'register',
        loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent),
        title: 'register',
      },
      {
        path: '**',
        redirectTo: '/home',
      },
];

  


