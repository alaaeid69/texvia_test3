import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  scrollToSection(sectionId: string){
const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' , block:'start'})
}
  }

}
