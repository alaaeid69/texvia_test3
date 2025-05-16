import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () => import('../app/pages/home/home.component').then(m => m.HomeComponent),
        title: 'Home',
      },
      {
        path: 'about',
        loadComponent: () => import('../app/pages/about-us/about-us.component').then(m => m.AboutUsComponent),
        title: 'AboutUs',
      },
      {
        path: 'industries',
        loadComponent: () => import('../app/pages/industries/industries.component').then(m => m.IndustriesComponent),
        title: 'Industries',
      },
      {
        path: 'solutions',
        loadComponent: () => import('../app/pages/solutions/solutions.component').then(m => m.SolutionsComponent),
        title: 'Solutions',
      },
      {
        path: 'courses',
        loadComponent: () => import('../app/pages/courses/courses.component').then(m => m.CoursesComponent),
        title: 'courses',
      },
      {
        path: 'services',
        loadComponent: () => import('../app/pages/how-we-deliver-value/how-we-deliver-value.component').then(m => m.HowWeDeliverValueComponent),
        title: 'services',
      },
      {
        path: 'login',
        loadComponent: () => import('../app/pages/login/login.component').then(m => m.LoginComponent),
        title: 'login',
      },
      {
        path: 'register',
        loadComponent: () => import('../app/pages/register/register.component').then(m => m.RegisterComponent),
        title: 'register',
      },
      {
        path: '**',
        redirectTo: '/home',
      },
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }
  


