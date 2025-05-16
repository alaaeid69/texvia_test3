import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
private readonly router= inject(Router)
navigate(route: string): void {
  this.router.navigate([route]).then(() => {
    const element = document.getElementById(route.slice(1));
  });
}
    } 
 

