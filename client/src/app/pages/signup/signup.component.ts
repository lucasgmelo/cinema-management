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

  signupForm = this.formBuilder.group({
    email: '',
    password: '',
    name: '',
    access: 'guest',
  });

  backToSignin() {
    this.route.navigate(['/login']);
  }

  onSubmit(): void {
    const { email, password, name } = this.signupForm.value;

    this.authService.signUp(email!, password!, name!);
  }
}
