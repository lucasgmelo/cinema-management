import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { SeatComponent } from './seat.component';

describe('SeatComponent', () => {
  let component: SeatComponent;
  let fixture: ComponentFixture<SeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle state when click', fakeAsync(() => {
    spyOn(component, 'toggle');

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    tick();
    expect(component.toggle).toHaveBeenCalled();
  }));
});
