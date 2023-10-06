import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { EmpolyeeModel } from './list/model';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})


export class EmployeeResolver implements Resolve<EmpolyeeModel[]> {
  constructor(private employeeService: EmployeeService) {}
   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<EmpolyeeModel[]> {
    return this.employeeService.getEmployees();;
  }
}
