import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlybaidangComponent } from './quanlybaidang.component';

describe('QuanlybaidangComponent', () => {
  let component: QuanlybaidangComponent;
  let fixture: ComponentFixture<QuanlybaidangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuanlybaidangComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuanlybaidangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
