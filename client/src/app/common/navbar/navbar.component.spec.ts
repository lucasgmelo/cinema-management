import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';

import { NavbarComponent } from './navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { provideFirestore } from '@angular/fire/firestore';

describe('NavbarComponent', () => {
  let authService: AuthService;

  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [ReactiveFormsModule, AngularFireModule.initializeApp(environment.firebase)],
    }).compileComponents();
    authService = TestBed.inject(AuthService);

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // authService.logout();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate when click in Logo', fakeAsync(() => {
    spyOn(component, 'goToHomePage');

    let button = fixture.debugElement.nativeElement.querySelector('.logo');
    button.click();

    tick();
    expect(component.goToHomePage).toHaveBeenCalled();
  }));

  // it('should find Login text when guest', fakeAsync(() => {
  //   let link = fixture.debugElement.nativeElement.querySelector('.signIn');

  //   tick();
  //   expect(link.innerText).toBe('Login');
  // }));

  // it('should find Ingressos text when logged as customer', fakeAsync(() => {
  //   authService.signIn('ada@gmail.com', '123');

  //   tick(10000);

  //   console.log(component.user);

  //   let button = fixture.debugElement.nativeElement.querySelector('section a');
  //   expect(button.innerText).toBe('Ingressos');
  // }));

  // it('should find Gerenciar text when logged as manager', fakeAsync(() => {
  //   authService.signIn('pog@gmail.com', '123');
  //   tick();

  //   let button = fixture.debugElement.nativeElement.querySelector('section a');

  //   tick();
  //   expect(button.innerText).toBe('Ingressos');
  // }));
});
