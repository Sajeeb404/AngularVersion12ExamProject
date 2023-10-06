import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { EmployeeService } from '../employee.service';
import { FormControl, FormGroup } from '@angular/forms';
import { EmpolyeeModel } from '../list/model';


@Component({
  selector: 'app-editemployeeforms',
  templateUrl: './editemployeeforms.component.html',
  styleUrls: ['./editemployeeforms.component.css']
})
export class EditemployeeformsComponent implements OnInit {

  id!: number;
  employee: EmpolyeeModel | undefined;
  // forms!: FormGroup;

  constructor(private router:Router, private route: ActivatedRoute, private employeeService:EmployeeService) {

    

  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    console.log('Employee IDsssssssssssss:', this.id);
 
    // this.employeeService.getEmployeeByID(this.id).subscribe((data: EmpolyeeModel) => {
    //   this.employee = data;
      
    // });

    // this.initializeForm();

    if (this.id) {
      this.employeeService.getEmployeeByID(this.id).subscribe((data: EmpolyeeModel) => {
        this.employee = data;
        console.log('Employee IDsssssssssssss:', this.employee);
        
      
      });
    } else {
      console.error('Invalid or missing employee ID.');
    }

};



// initializeForm() {
//   if (this.employee) {
//     this.forms = new FormGroup({
//       id: new FormControl(this.employee.id),
//       first_name: new FormControl(this.employee.first_name),
//       last_name: new FormControl(this.employee.last_name),
//       birth_date: new FormControl(this.employee.birth_date),
//       phone_number: new FormControl(this.employee.phone_number),
//       gender: new FormControl(this.employee.gender),
//       skill_name: new FormControl(this.employee.skill_name),
//       experience: new FormControl(this.employee.experience),
//       skill_level: new FormControl(this.employee.skill_level),
//     });
// }



updateEmployee() {
  if (this.id) {
    const updatedEmployeeData = this.employee;
    this.employeeService.updatePost(updatedEmployeeData).subscribe(
      (response) => {
        // Handle the success response, e.g., show a success message
        this.router.navigateByUrl('employee/employees');
        console.log('Employee updated successfully:', response);

      },
      (error) => {
        // Handle the error, e.g., show an error message
        console.error('Error updating employee:', error);
      }
    );
  }
}




}

