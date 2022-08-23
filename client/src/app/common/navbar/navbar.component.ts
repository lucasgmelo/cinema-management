import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  user = this.authService.user;

  goToLoginPage() {
    if (this.router.url.includes('login') || this.router.url.includes('cadastro')) return;
    this.router.navigate(['/login']);
  }

  signIn(name: string, access: 'manager' | 'customer') {
    this.authService.signIn(name, access);
    console.log('logado');
  }

  logout() {
    this.authService.logout();
    console.log('deslogado');
  }
}
