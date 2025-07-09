import { Component, inject} from '@angular/core';
import { RouterLink } from '@angular/router';
import {  NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-position-job-details',
  imports: [ NgbNavModule, RouterLink],
  templateUrl: './position-job-details.component.html',
  styleUrl: './position-job-details.component.scss'
})
export class PositionJobDetailsComponent {
private readonly toastrService = inject(ToastrService)


  // switch between taps 
activeTab:number =1;
goToApplyTab(){
  this.activeTab =2;
}

//email
email:string ="Careers@Texvia-tech.com"
copiedEmail: string = ''; 

// to print email
copyEmail() {
    this.copiedEmail = this.email; 
    navigator.clipboard.writeText(this.email).then(() => {
       this.toastrService.success('copied the email successed ')
    }).catch(err => {
       this.toastrService.error('copied the email Failed ')
    });
  }

}
