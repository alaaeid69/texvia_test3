
 import { Component, OnInit } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

@Component({
  selector: 'app-dashboard-users',
  imports: [],
  templateUrl: './dashboard-users.component.html',
  styleUrl: './dashboard-users.component.scss'
})
export class DashboardUsersComponent {

  users: User[] = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Bob Williams', email: 'bob@example.com', role: 'Editor', status: 'Active' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Viewer', status: 'Inactive' },
    { id: 4, name: 'Diana Prince', email: 'diana@example.com', role: 'Admin', status: 'Active' },
    { id: 5, name: 'Eve Adams', email: 'eve@example.com', role: 'Viewer', status: 'Active' },
  ];

  ngOnInit(): void {
  }

}
