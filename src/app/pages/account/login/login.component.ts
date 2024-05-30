import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public frmData: any;
  constructor(
    private dt: FormBuilder,
    private http: HttpClient,
    private route: Router
  ) {
    this.frmData = this.dt.group({
      email: [''],
      password: [''],
    });
  }

  onSubmit() {
    console.log(this.frmData.value);
    this.http.get<any>('http://localhost:3000/singUp').subscribe({
      next: (res: any) => {
        const user = res.find((a: any) => {
          return (
            a.email === this.frmData.value.email &&
            a.password === this.frmData.value.password
          );
        });
        if (user) {
          alert('you are succesfully login');
          this.frmData.reset();
          this.route.navigate(['home/furniture']);
          let accessToken = `${user.email}-access_token-${user.password}`;
          localStorage.setItem('access_token', accessToken);
        } else {
          alert('User not found');
          this.route.navigate(['pages/login']);
        }
      },
      error: (err: any) => {
        alert('Something wents wrong');
      },
    });
  }
}
