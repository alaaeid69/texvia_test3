import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-careers',
  imports: [],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss'
})
export class CareersComponent {
  private readonly router = inject(Router)

  goToPositionDtails():void{
   this.router.navigate(['/job-Details'])
  }
}
