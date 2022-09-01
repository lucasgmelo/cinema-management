import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import Toast from 'src/app/toastConfig';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private route: Router, private formBuilder: FormBuilder) {}

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
    this.route.navigate(['/']);
    Toast.fire({
      icon: 'success',
      title: 'Cadastro realizado com sucesso',
    });
  }
}
