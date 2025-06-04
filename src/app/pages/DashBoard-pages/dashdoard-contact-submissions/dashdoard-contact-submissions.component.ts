import { Component } from '@angular/core';
import { Submission } from '../../../core/contactSubmission/icontact-submission';

@Component({
  selector: 'app-dashdoard-contact-submissions',
  imports: [],
  templateUrl: './dashdoard-contact-submissions.component.html',
  styleUrl: './dashdoard-contact-submissions.component.scss'
})
export class DashdoardContactSubmissionsComponent {
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
   {
      id: 4,
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


  //pagnation variables
  paginatedsubmissions:Submission [] =[]
  currentPage: number = 1;
  pageSize: number = 1;
  pageSizeOptions: number[] = [5,10,15];
  totalPages: number = 1;

  constructor() { }

  ngOnInit(): void {
 
  }

  // set the submission to be viewed in th model
  viewSubmissionDetails(submission: Submission): void {
    this.selectedSubmission = submission;
    this.updatePagination()
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


  // pagentions methods 
  updatePagination() {
    this.totalPages = Math.ceil(this.submissions.length / this.pageSize);
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedsubmissions = this.submissions.slice(startIndex, endIndex);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagination();
    }
  }

  onPageSizeChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.pageSize = +selectElement.value;
    this.currentPage = 1; // Reset to first page
    this.updatePagination();
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }
}


