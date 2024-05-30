import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public frmData: any;
  public singuser: any;
  value!: string;

  public isFormSubmit: boolean = false;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: Router
  ) {
    this.frmData = this.fb.group({
      fname: [''],
      lname: [''],
      email: ['', Validators.required, Validators.email],
      password: [''],
    });
  }
  onSubmit() {
    // console.log(this.frmData.value);
    this.singuser = this.frmData.value.fname;
    this.http
      .post<any>('http://localhost:3000/singUp', this.frmData.value)
      .subscribe({
        next: (res: any) => {
          alert('Data Added Successfully');
          this.isFormSubmit = true;
          this.frmData.reset();
          this.route.navigate(['/pages/login']);
        },
        error: (err: any) => {
          alert('Somthing went wrong');
        },
      });
  }
  get email() {
    return this.frmData.get('email');
  }
}
