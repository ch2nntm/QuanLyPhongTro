import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietphongtroComponent } from './chitietphongtro.component';

describe('ChitietphongtroComponent', () => {
  let component: ChitietphongtroComponent;
  let fixture: ComponentFixture<ChitietphongtroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChitietphongtroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChitietphongtroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
