import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    TestBed.configureTestingModule({});
    await TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(environment.firebase)],
    }).compileComponents();
    service = TestBed.inject(AuthService);
  });

  afterEach(() => {
    service.logout();
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
    service.signIn('ada@gmail.com', '123');

    service.logout();

    expect(service.user.name).toBe(null);
    expect(service.user.access).toBe('guest');
  }));

  it('should be able to remove localStorage when logout', fakeAsync(() => {
    localStorage.removeItem('user');

    service.signIn('ada@gmail.com', '123');

    service.logout();

    expect(JSON.parse(localStorage.getItem('user') || '{}')).toEqual({});
  }));

  it('should be able to signin as customer', fakeAsync(() => {
    localStorage.removeItem('user');

    service.signIn('ada@gmail.com', '123');

    expect(JSON.parse(localStorage.getItem('user') || '{}').access).toBe('customer');
  }));

  it('should be able to signin as manager', fakeAsync(() => {
    localStorage.removeItem('user');

    service.signIn('pog@gmail.com', '123');

    expect(JSON.parse(localStorage.getItem('user') || '{}').access).toBe('manager');
  }));
});
