import { Component, OnInit } from '@angular/core';
import { AddComponent } from '../add.component';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormBasicInfoState, FormSkillState } from 'src/app/store/form-state.interface';
import { FormGroup } from '@angular/forms';
import { EmployeeModule } from '../../employee.module';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  constructor(private employeeService:EmployeeService, private router:Router, private store: Store<any>) { }


  formBasicData!:FormBasicInfoState;
  formSkillData!:FormSkillState ;




  ngOnInit(): void {

    this.store.select('ngrx').subscribe(res =>{
      this.formSkillData = res;
    } );
    this.store.select('ngrx1').subscribe(res =>{
      this.formBasicData  = res;
    } );

  }

  confirmSubmit(){
    const fulldata = Object.assign({}, this.formSkillData, this.formBasicData);

    this.employeeService.employeePost(fulldata).subscribe(
      (response) => {
        this.router.navigateByUrl('employee/employees');
        console.log('Employee save successfully:', response);
      },
      (error) => {
        console.error('Error updating employee:', error);
      }
    );



  }

}
