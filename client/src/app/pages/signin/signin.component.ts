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

  isDisabled = true;

  emptyemail = true;
  emptypassword = true;
  
  ngOnInit(): void {
    const currentUser: User = JSON.parse(localStorage.getItem('user') || '{}');
    if (currentUser.access !== 'guest' && currentUser.access !== undefined) this.route.navigate(['/']);
  }

  signinForm = this.formBuilder.group({
    email: '',
    password: '',
  });

  onChangeInput(event: any) {
    switch(event.target.id) {
      case 'email': {
        if (!event.target.value) {
          this.emptyemail = true;
        } else {
          this.emptyemail = false;
        }
        break; 
      }
      case 'password': { 
        if (!event.target.value) {
          this.emptypassword = true;
        } else {
          this.emptypassword = false;
        }
        break; 
      }
    }
  }

  backToHome() {
    this.route.navigate(['/']);
  }

  goToSignup() {
    this.route.navigate(['/cadastro']);
  }

  onChangeEmail() {}

  loginWithGoogle() {
    this.authService.signInWithGoogle();
  }

  isButtonDisabled() {
    if(this.emptyemail || this.emptypassword) {
      this.isDisabled = true;
    }else{
      this.isDisabled = false;
    }
  }

  onSubmit(): void {
    const { email, password } = this.signinForm.value;

    this.authService.signIn(email!, password!);
    
  }
}
