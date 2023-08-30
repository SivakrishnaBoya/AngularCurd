import { Injectable } from '@angular/core';
import { Employee } from '../models/employees.model';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  constructor(private http:HttpClient) {
    
    
  }

GetAllEmployee():Observable{
  
  return this.http.get<Employee[]>(this.baseUrl+'');
}
}
