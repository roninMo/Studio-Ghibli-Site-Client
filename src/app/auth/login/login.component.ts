import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login: FormGroup;

  constructor(private fb: FormBuilder, public router: Router) {}

  ngOnInit(): void {
    this.login = this.fb.group({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  loginSubmit() {
    // console.log('User input: ', this.login.value);
    this.postAuthentication(this.login.value);
    this.login.reset(); // Reset the form so it has no input
  }

  postAuthentication(userData: any) {
    console.log(userData);

    // this.apiService.login(userData)
    // .subscribe(credentials => {
    //   console.log('user credentials', credentials);
    //   localStorage.setItem('token', credentials.token); // Store the token in localStorage for routeGuards
    //   this.router.navigate(['/app-landing-page']);
    // });
    this.router.navigate(['/home']);
  }
}
