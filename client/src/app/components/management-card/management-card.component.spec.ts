import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementCardComponent } from './management-card.component';

describe('ManagementCardComponent', () => {
  let component: ManagementCardComponent;
  let fixture: ComponentFixture<ManagementCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagementCardComponent],
      imports: [HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ManagementCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
