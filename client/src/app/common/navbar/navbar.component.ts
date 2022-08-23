import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  user = this.authService.user;

  signIn(name: string, access: 'manager' | 'customer') {
    this.authService.signIn(name, access);
    console.log('logado');
  }

  logout(){
    this.authService.logout();
    console.log('deslogado');
  }
}
