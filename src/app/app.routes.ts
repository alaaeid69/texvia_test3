// import { Routes } from '@angular/router'
// import { HomeComponent } from './pages/home/home.component';
// import { SolutionsComponent } from './pages/solutions/solutions.component';
// import { IndustriesComponent } from './pages/industries/industries.component';
// import { CoursesComponent } from './pages/courses/courses.component';
// import { HowWeDeliverValueComponent } from './pages/how-we-deliver-value/how-we-deliver-value.component';
// import { AboutUsComponent } from './pages/about-us/about-us.component';
// import { LoginComponent } from './pages/login/login.component';
// import { RegisterComponent } from './pages/register/register.component';

// export const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'home',
//     pathMatch: 'full',
//   },
//   {
//     path: 'home',
//     component: HomeComponent,
//     title: 'Home',
//   },
//   {
//     path: 'solutions',
//     component: SolutionsComponent,
//     title: 'Solutions',
//   },
//   {
//     path: 'industries',
//     component: IndustriesComponent,
//     title: 'Industries',
//   },
//   {
//     path: 'courses',
//     component: CoursesComponent,
//     title: 'Courses',
//   },
//   {
//     path: 'services',
//     component: HowWeDeliverValueComponent,
//     title: 'Services',
//   },
//   {
//     path: 'about',
//     component: AboutUsComponent,
//     title: 'About Us',
//   },
//   {
//     path: 'login',
//     component: LoginComponent,
//     title: 'Login',
//   },
//   {
//     path: 'register',
//     component: RegisterComponent,
//     title: 'Register',
//   },
//   {
//     path: '**',
//     redirectTo: 'home',
//   },
// ];
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
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
    title: 'Courses',
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/how-we-deliver-value/how-we-deliver-value.component').then(m => m.HowWeDeliverValueComponent),
    title: 'Services',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about-us/about-us.component').then(m => m.AboutUsComponent),
    title: 'About Us',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
    title: 'Login',
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent),
    title: 'Register',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];