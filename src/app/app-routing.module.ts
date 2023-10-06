import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './employee/list/list.component';
import { EmployeeResolver } from './employee/employee.resolver';

const routes: Routes = [

  { path: '', component: HomeComponent },

  // { path: 'employees', component: ListComponent, resolve: { employees: EmployeeResolver },},
  
  { path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationModule) },
  { path: 'employee', loadChildren: () => import('./employee/employee.module').then((m) => m.EmployeeModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
