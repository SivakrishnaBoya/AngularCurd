import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employees.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  
   public employee: Employee[] = [{
     id: '1001',
     name: 'sivakrishna',
     email: 'siva.boya@gmail.com',
     phonenumber: 9391019825,
     salary: 20000,
     department: 'Developer'
   },
   {
    id: '1002',
    name: 'Spandhana',
    email: 'spndhanareddy@gmail.com',
    phonenumber: 1234569870,
    salary: 16000,
    department: 'Developer'
  },
  {
    id: '1003',
    name: 'Sudharshanreddy',
    email: 'SudharshanReddy@gmail.com',
    phonenumber: 9876543210,
    salary: 17000,
    department: 'Developer'
  },
  {
    id: '1004',
    name: 'Prakash',
    email: 'prakash@gmail.com',
    phonenumber: 9391929394,
    salary: 122000,
    department: 'Developer'
  }]

}
