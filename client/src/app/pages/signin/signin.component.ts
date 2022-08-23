import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  backToHome() {
    this.route.navigate(['/']);
  }
}
