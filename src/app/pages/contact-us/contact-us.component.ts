import { Component, inject, OnInit } from '@angular/core';
import { TagManagerService } from '../../core/services/Tag-Manager/tag-manager.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact-us',
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent{
private tagManagerService= inject(TagManagerService);
     private router = inject(Router);


      onSubmit() {
      
       this.tagManagerService.trackFormSubmit('submit-contact-form', this.router.url);
     }
}
