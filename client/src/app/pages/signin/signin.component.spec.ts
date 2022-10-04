import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SigninComponent],
      imports: [ReactiveFormsModule, AngularFireModule.initializeApp(environment.firebase)],
    }).compileComponents();

    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate when click to go back', fakeAsync(() => {
    spyOn(component, 'backToHome');

    let button = fixture.debugElement.nativeElement.querySelector('.container > button');
    button.click();

    tick();
    expect(component.backToHome).toHaveBeenCalled();
  }));

  it('should have all forms label', fakeAsync(() => {
    const formLabels = ['Email', 'Senha'];

    let labels: HTMLElement[] = fixture.debugElement.nativeElement.querySelectorAll('label');

    let labelsInnerText = [...labels].map((label) => label.innerText.replace('*', ''));
    let allLabelsExists = labelsInnerText.map((label) => formLabels.includes(label));

    expect(allLabelsExists.includes(false)).toBeFalsy();
  }));
});
