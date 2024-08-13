import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoommateSearchDetailComponent } from './roommate-search-detail.component';

describe('RoommateSearchDetailComponent', () => {
  let component: RoommateSearchDetailComponent;
  let fixture: ComponentFixture<RoommateSearchDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoommateSearchDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoommateSearchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
