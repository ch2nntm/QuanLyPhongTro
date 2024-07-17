import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuephongComponent } from './thuephong.component';

describe('ThuephongComponent', () => {
  let component: ThuephongComponent;
  let fixture: ComponentFixture<ThuephongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThuephongComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThuephongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
