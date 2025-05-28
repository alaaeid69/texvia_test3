

import { Component, OnInit, } from '@angular/core'; 
import { Submission } from '../../core/contactSubmission/icontact-submission';



@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent  implements OnInit {

  submissions: Submission[] = [
    {
      id: 1,
      name: 'Alice Wonderland',
      mobile:'01225756490',
      email: 'alice@example.com',
      title:'manager',
      company: 'texvia',
      region: 'cairo',
      solutions: 'cairo',
      industries:"smart manufactureing",
      dateReceived: '2024-05-27 10:30 AM',
      message: 'Hello, I would like to know more about your premium services. Please provide details.',
      status: 'New',
      statusClass: 'bg-success'
    },
    {
      id: 2,
      name: 'Alice Wonderland',
      mobile:'01225756490',
      email: 'alice@example.com',
      title:'manager',
      company: 'texvia',
      region: 'cairo',
      solutions: 'cairo',
      industries:"smart manufactureing",
      dateReceived: '2024-05-27 10:30 AM',
      message: 'Hello, I would like to know more about your premium services. Please provide details.',
      status: 'New',
      statusClass: 'bg-success'
    },
   
    {
      id: 3,
      name: 'Alice Wonderland',
      mobile:'01225756490',
      email: 'alice@example.com',
      title:'manager',
      company: 'texvia',
      region: 'cairo',
      solutions: 'cairo',
      industries:"smart manufactureing",
      dateReceived: '2024-05-27 10:30 AM',
      message: 'Hello, I would like to know more about your premium services. Please provide details.',
      status: 'New',
      statusClass: 'bg-success'
    },
   
   
  ];

  selectedSubmission: Submission | null = null;
  submissionToDeleteId: number | null = null;

  constructor() { }

  ngOnInit(): void {
 
  }

  // set the submission to be viewed in th model
  viewSubmissionDetails(submission: Submission): void {
    this.selectedSubmission = submission;
    
  }

 
  markAsRead(submissionToUpdate: Submission): void {
    const index = this.submissions.findIndex(s => s.id === submissionToUpdate.id);
    if (index !== -1 && this.submissions[index].status !== 'Read' && this.submissions[index].status !== 'Replied') {
      this.submissions[index].status = 'Read';
      this.submissions[index].statusClass = 'bg-primary';
      
      console.log('Marked as read:', this.submissions[index]);
    }
  }

  // Method to set the ID of the submission to be deleted
  prepareForDelete(submissionId: number): void {
    this.submissionToDeleteId = submissionId;
   
  }

  // Method to confirm and execute deletion
  confirmDelete(): void {
    if (this.submissionToDeleteId !== null) {
      this.submissions = this.submissions.filter(s => s.id !== this.submissionToDeleteId);
      console.log('Deleted submission with ID:', this.submissionToDeleteId);
      
      this.submissionToDeleteId = null; // Reset
      
    }
  }
}
