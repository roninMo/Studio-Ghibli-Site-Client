import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signup: FormGroup;
  constructor(private fb: FormBuilder, public router: Router) {}

  ngOnInit(): void {
    this.signup = this.fb.group({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  signupSubmit() {
    this.createAccount(this.signup.value);
    this.signup.reset(); // Reset the form so it has no input
  }

  createAccount(accountDetails: any) {
    // this.apiService.signup(accountDetails).subscribe((credentials) => {
    //   console.log('user credentials', credentials);
    //   localStorage.setItem('token', credentials.token); // Store the token in localStorage for routeGuards
    //   this.router.navigate(['app-landing-page']);
    // });
    this.router.navigate(['/home']);
  }
}
