import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewListContentComponent } from './new-list-content.component';

describe('NewListContentComponent', () => {
  let component: NewListContentComponent;
  let fixture: ComponentFixture<NewListContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewListContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewListContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
