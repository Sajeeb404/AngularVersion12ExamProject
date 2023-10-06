import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../employee.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AddComponent } from '../add.component';
import { EmpolyeeModel } from '../../list/model';
import { Store } from '@ngrx/store';
import { formValueChange } from 'src/app/store/formData.actions';


@Component({
  selector: 'app-basicinformation',
  templateUrl: './basicinformation.component.html',
  styleUrls: ['./basicinformation.component.css']
})
export class BasicinformationComponent implements OnInit {

  constructor(private store: Store, private fb: FormBuilder, private router: Router, private compp: AddComponent, private employeeservise:EmployeeService) { }


  posts!:EmpolyeeModel[];
  forms!:FormGroup;

  submit(){
    const formData = this.forms.value;
console.log('1ST---', formData);

    this.store.dispatch(formValueChange({
      id: formData.id,
      first_name: formData.first_name,
      last_name: formData.last_name,
      birth_date: formData.birth_date,
      phone_number: formData.phone_number,
      gender: formData.gender
    }));
    // this.store.dispatch(delayedFormStateRecieved({ name: "Delayed2", age: 2 }));

      // this.employeeservise.employeePost(formData).subscribe((res) => {
      //   console.log(this.forms.value.birth_date)
      //   alert("success")
      // });

     this.router.navigateByUrl('employee/add/skillinfor');
      this.compp.buttonColor(2);
     
    }

  ngOnInit(): void {

    this.forms = this.fb.group({
      id: '',
      first_name: '',
      last_name: '',
      birth_date: '',
      phone_number: '',
      gender: '',
      skill_name: '',
      experience: '',
      skill_level: '',

    })

  }

  // btnNumber!:number;
  // buttonColor(btn: number){
  //   this.btnNumber = btn    
  //  }





}
