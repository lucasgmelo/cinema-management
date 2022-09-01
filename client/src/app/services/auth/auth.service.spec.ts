import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to set localStorage when signIn', fakeAsync(() => {
    localStorage.removeItem('user');

    tick(50);

    service.signIn('ada@gmail.com', '123123');

    tick(50);

    expect(JSON.parse(localStorage.getItem('user') || '{}').name).toBe('Ada');
  }));

  it('should be able to logout', fakeAsync(() => {
    service.signIn('John', 'manager');

    service.logout();

    expect(service.user.name).toBe(null);
    expect(service.user.access).toBe('guest');
  }));

  it('should be able to remove localStorage when logout', fakeAsync(() => {
    localStorage.removeItem('user');

    service.signIn('John', 'manager');

    service.logout();

    expect(JSON.parse(localStorage.getItem('user') || '{}')).toEqual({});
  }));
});
