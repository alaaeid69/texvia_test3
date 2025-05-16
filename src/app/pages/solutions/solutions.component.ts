import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solutions',
  imports: [],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss'
})
export class SolutionsComponent {
scrollToSection(sectionId: string){
const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' , block:'start'})
}
}
}
