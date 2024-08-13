import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoommateSearchComponent } from './roommate-search.component';

describe('RoommateSearchComponent', () => {
  let component: RoommateSearchComponent;
  let fixture: ComponentFixture<RoommateSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoommateSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoommateSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
