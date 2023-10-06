import { Component, OnInit } from '@angular/core';

import { EmpolyeeModel } from './model';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {



  employees!:EmpolyeeModel[]

   constructor(private servise:EmployeeService, private route: ActivatedRoute, private router:Router){
    this.employees = this.route.snapshot.data['employees'];
   }
  
  ngOnInit(): void {
 
  }




  deleteEpm(tasks:any){
    this.servise.deletes(tasks).subscribe((res)=>{
      alert("Deleted Successfull")
    });
    
   window.location.reload();
  }

  employeById(id:number){
    this.servise.getEmployeeByID(id).subscribe((res)=>{
    })
    this.router.navigateByUrl('employee/getEmployeeById/'+id);

  }



}
