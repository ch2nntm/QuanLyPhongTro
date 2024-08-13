import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentRoomComponent } from './rent-room.component';

describe('RentRoomComponent', () => {
  let component: RentRoomComponent;
  let fixture: ComponentFixture<RentRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentRoomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
