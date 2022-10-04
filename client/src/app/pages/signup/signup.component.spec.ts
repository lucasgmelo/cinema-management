import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [ReactiveFormsModule, AngularFireModule.initializeApp(environment.firebase)],
    }).compileComponents();

    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate when click to go back', fakeAsync(() => {
    spyOn(component, 'backToSignin');

    let button = fixture.debugElement.nativeElement.querySelector('.container > button');
    button.click();

    tick();
    expect(component.backToSignin).toHaveBeenCalled();
  }));

  it('should have all forms label', fakeAsync(() => {
    const formLabels = ['Nome', 'Email', 'Senha'];

    let labels: HTMLElement[] = fixture.debugElement.nativeElement.querySelectorAll('label');

    let labelsInnerText = [...labels].map((label) => label.innerText.replace('*', ''));
    let allLabelsExists = labelsInnerText.map((label) => formLabels.includes(label));

    expect(allLabelsExists.includes(false)).toBeFalsy();
  }));
});
