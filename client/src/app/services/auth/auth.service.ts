import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import Toast from 'src/app/toastConfig';

export interface User {
  name: string | null;
  access: 'guest' | 'manager' | 'customer';
  id: string | null;
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
    id: null,
    access: 'guest',
  };

  async signIn(email: string, password: string) {
    try {
      const userLogged = await this.fireauth.signInWithEmailAndPassword(email, password);

      this.user = {
        name: userLogged.user?.displayName!,
        access: 'customer',
        id: userLogged.user?.uid!,
      };

      localStorage.setItem('user', JSON.stringify({ ...this.user }));
      this.route.navigate(['/']);
      return true;
    } catch {
      Toast.fire({
        icon: 'error',
        title: 'Login ou senha incorretos',
      });
      return false;
    }
  }

  async signUp(email: string, password: string, name: string) {
    try {
      const { user: newUser } = await this.fireauth.createUserWithEmailAndPassword(email, password);

      await newUser?.updateProfile({
        displayName: name,
      });

      this.route.navigate(['/']);

      Toast.fire({
        icon: 'success',
        title: 'Cadastro realizado com sucesso',
      });
    } catch {
      Toast.fire({
        icon: 'error',
        title: 'Não foi possível realizar o cadastro, tente novamente mais tarde',
      });
    }
  }

  logout() {
    this.user.id = null;
    this.user.name = null;
    this.user.access = 'guest';

    localStorage.removeItem('user');

    this.fireauth.signOut();
  }
}
