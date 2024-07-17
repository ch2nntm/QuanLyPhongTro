import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimoghepComponent } from './timoghep.component';

describe('TimoghepComponent', () => {
  let component: TimoghepComponent;
  let fixture: ComponentFixture<TimoghepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimoghepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimoghepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
