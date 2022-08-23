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

  it('should be able to signIn as a customer', () => {
    service.signIn('John', 'customer');

    expect(service.user.name).toBe('John');
    expect(service.user.access).toBe('customer');
  });

  it('should be able to signIn as a manager', () => {
    service.signIn('Teddy', 'manager');

    expect(service.user.name).toBe('Teddy');
    expect(service.user.access).toBe('manager');
  });

  it('should be able to set localStorage when signIn', fakeAsync(() => {
    localStorage.removeItem('user');

    tick(50);

    service.signIn('John', 'manager');

    tick(50);

    expect(JSON.parse(localStorage.getItem('user') || '{}').name).toBe('John');
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
