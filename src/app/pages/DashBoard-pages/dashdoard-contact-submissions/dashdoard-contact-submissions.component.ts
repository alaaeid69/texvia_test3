import { Component, inject, OnInit,} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Submission } from '../../../core/contactSubmission/icontact-submission';
import { NgbModal, NgbModalModule, NgbPaginationModule,  } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, Subject } from 'rxjs';
import { CommonModule, DatePipe, NgClass, SlicePipe } from '@angular/common';
import { ListFilterPipe } from '../../../shared/pipes/list-filter.pipe';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-dashdoard-contact-submissions',
  imports: [ RouterLink , RouterLinkActive   ,NgbPaginationModule, NgbModalModule, ListFilterPipe  , NgClass , FormsModule , DatePipe , SlicePipe , CommonModule],
  templateUrl: './dashdoard-contact-submissions.component.html',
  styleUrl: './dashdoard-contact-submissions.component.scss'
})
export class DashdoardContactSubmissionsComponent implements OnInit {
  rows: Submission[] = [];
  filteredRows: Submission[] = [];
  filterText: string = '';
  currentPage: number = 1;
  pageSize: number = 10;
  collectionSize: number = 0;
  totalPages: number = 1; 
  sortBy: string = 'dateReceived';
  sortDirection: 'asc' | 'desc' = 'asc';
  selectedSubmission: Submission | null = null;
  isLoading: boolean = false;
  filterSubject = new Subject<string>();
  columns = [
    { name: '#', prop: 'id', sortable: true },
    { name: 'Name', prop: 'name', sortable: true },
    { name: 'Email', prop: 'email', sortable: true },
    { name: 'Mobile', prop: 'mobile', sortable: true },
    { name: 'Company', prop: 'company', sortable: true },
    { name: 'Date Received', prop: 'dateReceived', sortable: true },
    { name: 'Actions', prop: 'actions', sortable: false }
  ];

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.filterSubject.pipe(debounceTime(300)).subscribe(value => {
      this.filterText = value;
      this.currentPage = 1;
      this.filterData();
    });

    this.loadData();
  }

  loadData() {
    this.isLoading = true;
    this.rows = [
      { id: 1, name: 'John Doe', email: 'john@example.com', mobile: '123-456-7890', company: 'Innovate Corp', dateReceived: new Date('2024-07-08'), title: 'Project Manager', region: 'North America', solutions: 'Cloud Services', industries: 'Technology', message: 'This is a sample message.', isRead: false },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', mobile: '098-765-4321', company: 'Solutions Inc', dateReceived: new Date('2024-07-07'), title: 'CEO', region: 'Europe', solutions: 'AI Solutions', industries: 'Finance', message: 'Interested in your services.', isRead: false },
      { id: 3, name: 'Ahmed Ali', email: 'ahmed@example.com', mobile: '555-123-4567', company: 'TechTrend', dateReceived: new Date('2024-07-06'), title: 'Developer', region: 'Middle East', solutions: 'Web Development', industries: 'Tech', message: 'Looking for collaboration.', isRead: false },

        { id: 4, name: 'noor Smith', email: 'jane@example.com', mobile: '098-765-4321', company: 'Solutions Inc', dateReceived: new Date('2024-07-07'), title: 'CEO', region: 'Europe', solutions: 'AI Solutions', industries: 'Finance', message: 'Interested in your services.', isRead: false },
      { id: 5, name: 'alaa Ali', email: 'ahmed@example.com', mobile: '555-123-4567', company: 'TechTrend', dateReceived: new Date('2024-07-06'), title: 'Developer', region: 'Middle East', solutions: 'Web Development', industries: 'Tech', message: 'Looking for collaboration.', isRead: false },
        { id: 6, name: 'hanna Smith', email: 'jane@example.com', mobile: '098-765-4321', company: 'Solutions Inc', dateReceived: new Date('2024-07-07'), title: 'CEO', region: 'Europe', solutions: 'AI Solutions', industries: 'Finance', message: 'Interested in your services.', isRead: false },
      { id: 7, name: 'yoesef Ali', email: 'ahmed@example.com', mobile: '555-123-4567', company: 'TechTrend', dateReceived: new Date('2024-07-06'), title: 'Developer', region: 'Middle East', solutions: 'Web Development', industries: 'Tech', message: 'Looking for collaboration.', isRead: false },
       { id: 8, name: 'kareem Doe', email: 'john@example.com', mobile: '123-456-7890', company: 'Innovate Corp', dateReceived: new Date('2024-07-08'), title: 'Project Manager', region: 'North America', solutions: 'Cloud Services', industries: 'Technology', message: 'This is a sample message.', isRead: false },
      { id: 9, name: 'salma Smith', email: 'jane@example.com', mobile: '098-765-4321', company: 'Solutions Inc', dateReceived: new Date('2024-07-07'), title: 'CEO', region: 'Europe', solutions: 'AI Solutions', industries: 'Finance', message: 'Interested in your services.', isRead: false },
      { id: 10, name: 'Ahmed Ali', email: 'ahmed@example.com', mobile: '555-123-4567', company: 'TechTrend', dateReceived: new Date('2024-07-06'), title: 'Developer', region: 'Middle East', solutions: 'Web Development', industries: 'Tech', message: 'Looking for collaboration.', isRead: false },

        { id: 11, name: 'Jane Smith', email: 'jane@example.com', mobile: '098-765-4321', company: 'Solutions Inc', dateReceived: new Date('2024-07-07'), title: 'CEO', region: 'Europe', solutions: 'AI Solutions', industries: 'Finance', message: 'Interested in your services.', isRead: false },
      { id: 12, name: 'Ahmed Ali', email: 'ahmed@example.com', mobile: '555-123-4567', company: 'TechTrend', dateReceived: new Date('2024-07-06'), title: 'Developer', region: 'Middle East', solutions: 'Web Development', industries: 'Tech', message: 'Looking for collaboration.', isRead: false },
        { id: 13, name: 'Jane Smith', email: 'jane@example.com', mobile: '098-765-4321', company: 'Solutions Inc', dateReceived: new Date('2024-07-07'), title: 'CEO', region: 'Europe', solutions: 'AI Solutions', industries: 'Finance', message: 'Interested in your services.', isRead: false },
      { id: 14, name: 'Ahmed Ali', email: 'ahmed@example.com', mobile: '555-123-4567', company: 'TechTrend', dateReceived: new Date('2024-07-06'), title: 'Developer', region: 'Middle East', solutions: 'Web Development', industries: 'Tech', message: 'Looking for collaboration.', isRead: false }
    ];
    this.filteredRows = [...this.rows];
    this.collectionSize = this.rows.length;
    this.updateTotalPages();
    this.isLoading = false;
    this.filterData();
  }

  filterData() {
    this.filteredRows = [...this.rows];
    this.collectionSize = this.filteredRows.length;
    this.updateTotalPages();
    this.sortData();
  }

  sortData() {
    this.filteredRows = [...this.filteredRows].sort((a, b) => {
    const valueA = a[this.sortBy as keyof Submission];
    const valueB = b[this.sortBy as keyof Submission];

    if (this.sortBy === 'dateReceived') {
      // Ensure valueA and valueB are valid for Date constructor
      const dateA = valueA instanceof Date ? valueA : new Date(String(valueA));
      const dateB = valueB instanceof Date ? valueB : new Date(String(valueB));

      // Check if dates are valid
      const timeA = isNaN(dateA.getTime()) ? 0 : dateA.getTime();
      const timeB = isNaN(dateB.getTime()) ? 0 : dateB.getTime();

      return this.sortDirection === 'asc' ? timeA - timeB : timeB - timeA;
    }
    // For non-date fields, convert to string and compare
    const strA = String(valueA);
    const strB = String(valueB);
    return this.sortDirection === 'asc' ? strA.localeCompare(strB) : strB.localeCompare(strA);
  });
  }

  onSort(prop: string) {
    if (this.sortBy === prop) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortBy = prop;
      this.sortDirection = 'asc';
    }
    this.sortData();
  }

  filter(value: string) {
    this.filterSubject.next(value);
  }

  openModal(submission: Submission, content: any) {
    this.selectedSubmission = { ...submission };
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true });
  }

  deleteSubmission(id: number | undefined) {
    if (id === undefined) return;
    this.rows = this.rows.filter(row => row.id !== id);
    this.filterData();
  }

  markAsRead(id: number) {
    const submission = this.rows.find(row => row.id === id);
    if (submission) submission.isRead = true;
    this.rows = [...this.rows];
    this.filterData();
  }
  
  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.filterData();
    }
  }

  updateTotalPages() {
    const filteredData = this.filteredRows.filter(item =>
      this.filterText
        ? item.name.toLowerCase().includes(this.filterText.toLowerCase()) ||
          item.email.toLowerCase().includes(this.filterText.toLowerCase()) ||
          item.mobile.toLowerCase().includes(this.filterText.toLowerCase()) ||
          item.company.toLowerCase().includes(this.filterText.toLowerCase()) ||
          new Date(item.dateReceived).toLocaleDateString('en-US').toLowerCase().includes(this.filterText.toLowerCase())
        : true
    );
    this.collectionSize = filteredData.length;
    this.totalPages = Math.ceil(this.collectionSize / this.pageSize) || 1;
  }
 

}


