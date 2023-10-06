import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddComponent } from '../add.component';
import { Store } from '@ngrx/store';
import { updateValue } from 'src/app/store/formData.actions';
import { EmployeeModule } from '../../employee.module';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicskill',
  templateUrl: './basicskill.component.html',
  styleUrls: ['./basicskill.component.css']
})
export class BasicskillComponent implements OnInit {

  posts!:EmployeeModule;
  forms!:FormGroup;

  constructor(private fb: FormBuilder, private store: Store, private router: Router, private compp: AddComponent) { }

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



  submits() {
    const formData = this.forms.value;
    console.log('2nd---', formData);
    this.store.dispatch(updateValue({
      skill_name: formData.skill_level,
      experience: formData.experience,
      skill_level: formData.skill_level
    }));
    this.router.navigateByUrl('employee/add/prev');
    this.compp.buttonColor(3);
}


}
