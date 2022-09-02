import { Injectable } from '@angular/core';

export interface User {
  name: string | null;
  access: 'guest' | 'manager' | 'customer';
  password?: string;
}

interface MockedUserTypes {
  'ada@gmail.com': User;
  'pog@gmail.com': User;
}

const mockedUsers: MockedUserTypes = {
  'ada@gmail.com': {
    name: 'Ada',
    password: '123123',
    access: 'customer',
  },
  'pog@gmail.com': {
    name: 'Pog',
    password: '123123',
    access: 'manager',
  },
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {
    if (localStorage.getItem('user')) {
      const currentUser: User = JSON.parse(localStorage.getItem('user') || '{}');

      this.user.name = currentUser.name;
      this.user.access = currentUser.access;
    }
  }

  user: User = {
    name: null,
    access: 'guest',
  };

  signIn(email: string, password: string) {
    if (email === 'ada@gmail.com') {
      const newName = mockedUsers[email].name;
      const newAccess: 'customer' | 'manager' | 'guest' = mockedUsers[email].access;

      localStorage.setItem('user', JSON.stringify({ name: newName, access: newAccess }));

      this.user.name = newName;
      this.user.access = newAccess;

      return true;
    }

    if (email === 'pog@gmail.com') {
      const newName = mockedUsers[email].name;
      const newAccess: 'customer' | 'manager' | 'guest' = mockedUsers[email].access;

      localStorage.setItem('user', JSON.stringify({ name: newName, access: newAccess }));
      this.user.name = newName;
      this.user.access = newAccess;

      return true;
    }

    return false;
  }

  logout() {
    this.user.name = null;
    this.user.access = 'guest';

    localStorage.removeItem('user');
  }
}
