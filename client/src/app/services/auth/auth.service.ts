import { Injectable } from '@angular/core';

export interface User {
  name: string | null;
  access: 'guest' | 'manager' | 'customer';
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {
    if (localStorage.getItem('user')) {
      const currentUser: User = JSON.parse(
        localStorage.getItem('user') || '{}'
      );

      this.user.name = currentUser.name;
      this.user.access = currentUser.access;
    }
  }

  user: User = {
    name: null,
    access: 'guest',
  };

  signIn(name: string, access: 'manager' | 'customer') {
    console.log('123');
    localStorage.setItem('user', JSON.stringify({ name, access }));
    this.user.name = name;
    this.user.access = access;
  }

  logout() {
    this.user.name = null;
    this.user.access = 'guest';

    localStorage.removeItem('user');
  }
}
