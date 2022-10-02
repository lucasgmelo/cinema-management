import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private route: Router, private formBuilder: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {}

  isDisabled = true;

  emptyemail = true;
  emptypassword = true;
  emptyname = true;

  signupForm = this.formBuilder.group({
    email: '',
    password: '',
    name: '',
    access: 'guest',
  });

  onChangeInput(event: any) {
    switch(event.target.id) {
      case 'name': {
        if (!event.target.value) {
          this.emptyname = true;
        } else {
          this.emptyname = false;
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
      case 'email': { 
        if (!event.target.value) {
          this.emptyemail = true;
        } else {
          this.emptyemail = false;
        }
        break; 
      }
    }
  }

  isButtonDisabled() {
    if(this.emptyname || this.emptypassword || this.emptyemail) {
      this.isDisabled = true;
    }else{
      this.isDisabled = false;
    }
  }

  backToSignin() {
    this.route.navigate(['/login']);
  }

  onSubmit(): void {
    const { email, password, name } = this.signupForm.value;

    this.authService.signUp(email!, password!, name!);
  }
}
