import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  constructor(private empSer: EmployeeService) {
    
   }

  ngOnInit(): void {

  }

  

  btnNumber:number=1;
  buttonColor(btn: number){
    this.btnNumber = btn;
  }




}
