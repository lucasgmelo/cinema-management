import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService, User } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor(private authService: AuthService, private route: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    const currentUser: User = JSON.parse(localStorage.getItem('user') || '{}');
    if (currentUser.access !== 'guest' && currentUser.access !== undefined) this.route.navigate(['/']);
  }

  signinForm = this.formBuilder.group({
    email: '',
    password: '',
  });

  backToHome() {
    this.route.navigate(['/']);
  }

  goToSignup() {
    this.route.navigate(['/cadastro']);
  }

  onChangeEmail() {}

  // Create button to log in especifically with google
  loginWithGoogle() {
    this.authService.signInWithGoogle();
  }

  onSubmit(): void {
    const { email, password } = this.signinForm.value;

    this.authService.signIn(email!, password!);
    
  }
}
