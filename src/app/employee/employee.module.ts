import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { RouterModule, Routes } from '@angular/router';
import { BasicinformationComponent } from './add/basicinformation/basicinformation.component';
import { BasicskillComponent } from './add/basicskill/basicskill.component';
import { PreviewComponent } from './add/preview/preview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeResolver } from './employee.resolver';
import { EditemployeeformComponent } from './add/editemployeeform/editemployeeform.component';
import { EditemployeeformsComponent } from './editemployeeforms/editemployeeforms.component';

const employeeroutes: Routes = [
  { path: 'employees', component: ListComponent, resolve: { employees: EmployeeResolver },},
  // { path: 'list', component: ListComponent },
  { path: 'getEmployeeById/:id', component: EditemployeeformsComponent },

  { path: 'add', component: AddComponent,
  children:[
    { path: 'basicinfor', component: BasicinformationComponent },
    { path: 'skillinfor', component: BasicskillComponent },
    { path: 'prev', component: PreviewComponent },
    { path: 'editiEmployform', component: EditemployeeformComponent },
  ]
},
];

@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    BasicinformationComponent,
    BasicskillComponent,
    PreviewComponent,
    EditemployeeformComponent,
    EditemployeeformsComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(employeeroutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class EmployeeModule { 


  constructor() {console.log("Employee") }
}
