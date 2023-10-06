import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmpolyeeModel } from './list/model';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private url ='http://localhost:9090/api/getAllEmployee';
  private urls ='http://localhost:9090/api/';

  constructor(private httpService:HttpClient, ) {
  }



  employeePost(post: any) {
    return this.httpService.post(this.urls+"addEmployee",post, httpOptions);
  }

  updatePost(post: any) {
    return this.httpService.put(this.urls+"updateEmployee",post, httpOptions);
  }
  
  getTasK(): Observable<EmpolyeeModel[]>{
    const tasks = this.httpService.get<EmpolyeeModel[]>(this.url)
    return tasks;
  }

  getEmployees(){
    return this.httpService.get<EmpolyeeModel[]>(this.url)
  }

  getEmployeeByID(id:number): Observable<any>{
return this.httpService.get(this.urls + 'getEmployeeById/'+ id);
  }

  deletes(tasks:any){
      return this.httpService.delete(this.urls + 'deleteEmployeeById/' + tasks.id);
  }







  
}
