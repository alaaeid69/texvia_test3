import { Component, HostListener, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule , RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  // private readonly router = inject(Router);

  // navLinks = [
  //   { label: 'home', route: '/home' },
  //   { label: 'solutions', route: '/solutions' },
  //   { label: 'industries', route: '/industries' },
  //   { label: 'services', route: '/services' },
  //   { label: 'about', route: '/about' },
  
  // ];

  // currentRoute = '/home'; 

  // ngOnInit(): void {
  //   this.currentLink();
  // }

  // currentLink(): void {
  //   this.router.events
  //     .pipe(filter((event) => event instanceof NavigationEnd))
  //     .subscribe((event: NavigationEnd) => {
  //       this.currentRoute = event.urlAfterRedirects;
  //     });
  // }

  // isActive(route: string): boolean {
  //   return this.currentRoute === route;
  // }

  // navigate(route: string): void {
  //   this.router.navigate([route]).then(() => {
  //     const element = document.getElementById(route.slice(1));
  //     if (element) {
  //       element.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   });
  // }

  // @HostListener('window:scroll')
  // onScroll(): void {

  //   const sections = document.querySelectorAll('section');
  //   sections.forEach((section) => {
  //     const top = section.offsetTop - 50;
  //     const height = section.offsetHeight;
  //     if (window.scrollY >= top && window.scrollY < top + height) {
  //       this.currentRoute = `/${section.id}`;
  //     }
  //   });
  // }
}


