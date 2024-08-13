import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagemainComponent } from './homepagemain.component';

describe('HomepagemainComponent', () => {
  let component: HomepagemainComponent;
  let fixture: ComponentFixture<HomepagemainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomepagemainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepagemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
