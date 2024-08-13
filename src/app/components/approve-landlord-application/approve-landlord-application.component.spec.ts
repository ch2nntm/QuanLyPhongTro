import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveLandlordApplicationComponent } from './approve-landlord-application.component';

describe('ApproveLandlordApplicationComponent', () => {
  let component: ApproveLandlordApplicationComponent;
  let fixture: ComponentFixture<ApproveLandlordApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApproveLandlordApplicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveLandlordApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
