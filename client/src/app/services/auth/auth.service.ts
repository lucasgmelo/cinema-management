import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import Toast from 'src/app/toastConfig';

export interface User {
  name: string | null;
  access: 'guest' | 'manager' | 'customer';
  password?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireauth: AngularFireAuth, private route: Router) {
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
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      () => {
        console.log('success');
        this.route.navigate(['/']);
      },
      () => {
        Toast.fire({
          icon: 'error',
          title: 'Login ou senha incorretos',
        });
        return false;
      }
    );
  }

  logout() {
    this.user.name = null;
    this.user.access = 'guest';

    localStorage.removeItem('user');
  }
}
