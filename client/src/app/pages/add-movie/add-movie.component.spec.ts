import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { AddMovieComponent } from './add-movie.component';

describe('AddMovieComponent', () => {
  let component: AddMovieComponent;
  let fixture: ComponentFixture<AddMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMovieComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate when click to go back', fakeAsync(() => {
    spyOn(component, 'goBackToManagement');

    let button = fixture.debugElement.nativeElement.querySelector('main > button');
    button.click();

    tick();
    expect(component.goBackToManagement).toHaveBeenCalled();
  }));

  it('should have all forms label', fakeAsync(() => {
    const formLabels = [
      'Nome do filme',
      'Diretor',
      'Duração',
      'Banner',
      'Data de início',
      'Data final',
      'Sala',
      'Horário',
    ];

    let labels: HTMLElement[] = fixture.debugElement.nativeElement.querySelectorAll('label');

    let labelsInnerText = [...labels].map((label) => label.innerText.replace('*', ''));
    let allLabelsExists = labelsInnerText.map((label) => formLabels.includes(label));

    expect(allLabelsExists.includes(false)).toBeFalsy();
  }));
});
