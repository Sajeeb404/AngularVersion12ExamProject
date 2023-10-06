import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


    constructor( private router: Router, private fb: FormBuilder) {

  
      this.loginForm = this.fb.group({
        userName: ['', [Validators.required, Validators.minLength(3)]],
        userP: ['', [Validators.required, Validators.minLength(6)]],
    
      });

     }


    loginForm:FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        userName: new FormControl(''),
        userP: new FormControl(''),
      }
    )

    
  }

  submit() {
    if (this.loginForm.invalid) {
      if (this.loginForm.get('userName')?.hasError('required')) {
        alert("Please write a user name.");
      } else if (this.loginForm.get('userName')?.hasError('minlength')) {
        alert("Username must be at least 3 characters.");
      }

      if (this.loginForm.get('userP')?.hasError('required')) {
        alert("Please write a user password.");
      } else if (this.loginForm.get('userP')?.hasError('minlength')) {
        alert("Password must be at least 6 characters.");
      }
    } else {
      // If the form is valid, perform the login logic here.
      alert("Login Successful");
      this.router.navigateByUrl('employee/employees');
    }
  }

  







}
