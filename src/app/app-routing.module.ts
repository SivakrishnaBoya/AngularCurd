import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './Components/Employess/employee-list/employee-list.component';

const routes: Routes = [
  {
    path:"",
    component:EmployeeListComponent
  },
  {
    path:"Employess",
    component:EmployeeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
