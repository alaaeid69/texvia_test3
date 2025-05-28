
export interface Submission {
  id: number;
  name: string;
  mobile:string,
  email: string;
  title:string;
  company:string
  region: string;
  solutions:string,
  industries:string,
  dateReceived: string;
  message: string;
  status: 'New' | 'Read' | 'Replied';
  statusClass: string;
}