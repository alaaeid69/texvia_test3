import { NgClass } from '@angular/common';
import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {  RouterLink, RouterLinkActive } from '@angular/router';

interface solutions{
  title: string,
  description:string,
  image:string ,
  icon:string 

}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive , NgClass],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

   private elementRef = inject(ElementRef);
   private sanitizer = inject(DomSanitizer)
  isDropdownOpen = false;

  // all of this coe for solution dropdown
  solution:solutions[] = [
    {
      title: 'Digital Maturity Assessment',
      description: 'Evaluate your organization\'s digital readiness and create a roadmap for transformation.',
      image: 'assets/images/digital-maturity.jpg',
      icon: `<svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M7 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
               <path d="M11 11V17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
               <path d="M15 15V17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
               <path d="M19 17V17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
             </svg>`
    },
    {
      title: 'Digital Transformation',
      description: 'Transform your business processes with cutting-edge digital solutions to enhance efficiency and innovation.',
      image: 'assets/images/digital-transformation.jpg',
      icon:  `<svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6Z" stroke="currentColor" stroke-width="2"/>
               <path d="M7 14L10 11L13 14L17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M8 7H16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
             </svg>`
    },
    {
      title: 'Smart Manufacturing',
      description: 'Leverage advanced technologies to optimize manufacturing processes and improve operational performance.',
      image: 'assets/images/smart-manufacturing.jpg',
      icon: `<svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M7 7H10V17H7V7Z" fill="currentColor"/>
               <path d="M14 7H17V17H14V7Z" fill="currentColor"/>
               <path d="M3 10H21" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
               <path d="M3 14H21" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
             </svg>`
    },
    {
      title: 'Industrial Automation',
      description: 'Automate industrial processes to increase productivity and reduce operational costs.',
      image: 'assets/images/industrial-automation.jpg',
      icon:  `<svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M12 3V9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
               <path d="M12 9L17 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
               <path d="M12 9L7 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
               <rect x="10" y="14" width="4" height="7" fill="currentColor"/>
               <path d="M5 21H19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
             </svg>`
    },
    {
      title: 'PI System',
      description: 'Implement a robust data infrastructure to collect, analyze, and visualize real-time operational data.',
      image: 'assets/images/pi-system.jpg',
      icon:  `<svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>
               <path d="M12 8V16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
               <path d="M8 12H16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
             </svg>`
    },
    {
      title: 'Real-Time Data & Analytics',
      description: 'Harness real-time data to make informed decisions and drive business success.',
      image: 'assets/images/realtime-analytics.jpg',
      icon: `<svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
               <path d="M7 14L10 11L13 14L17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M8 7H16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
             </svg>`
    },
    {
      title: 'AI-Ready IIoT Platform',
      description: 'Deploy an AI-powered Industrial IoT platform to enable smart, connected operations.',
      image: 'assets/images/ai-iiot.jpg',
      icon: `<svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 4C12 5.10457 11.1046 6 10 6C8.89543 6 8 5.10457 8 4C8 2.89543 8.89543 2 10 2C11.1046 2 12 2.89543 12 4Z"
                    />
                    <path
                      d="M16 15C16 16.1046 15.1046 17 14 17C12.8954 17 12 16.1046 12 15C12 13.8954 12.8954 13 14 13C15.1046 13 16 13.8954 16 15Z"
                    />
                    <path
                      d="M7 13C7 14.1046 6.10457 15 5 15C3.89543 15 3 14.1046 3 13C3 11.8954 3.89543 11 5 11C6.10457 11 7 11.8954 7 13Z"
                    />
                    <path
                      d="M20 8C20 9.10457 19.1046 10 18 10C16.8954 10 16 9.10457 16 8C16 6.89543 16.8954 6 18 6C19.1046 6 20 6.89543 20 8Z"
                    />
                    <path
                      d="M10 6L14 13"
                      stroke="currentColor"
                      stroke-width="1"
                      stroke-linecap="round"
                    />
                    <path
                      d="M14 13L18 10"
                      stroke="currentColor"
                      stroke-width="1"
                      stroke-linecap="round"
                    />
                    <path
                      d="M5 11L10 6"
                      stroke="currentColor"
                      stroke-width="1"
                      stroke-linecap="round"
                    />
                    <path
                      d="M14 13L5 15"
                      stroke="currentColor"
                      stroke-width="1"
                      stroke-linecap="round"
                    />
                  </svg>`
    }
  ];

  selectedSolution = this.solution[0]; // Default selection

  toggleDropdown(event: Event): void {
    event.stopPropagation();
    this.isDropdownOpen = !this.isDropdownOpen;

  }

  selectSolution(solution: any): void {
    this.selectedSolution = solution;
     this.isDropdownOpen = false;
  }

  //get save svg rendering 
  getSvgSafe(icon :string) :SafeHtml{
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
      this.selectedSolution=this.solution[0]
    }
  }

 
}


