import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietoghepComponent } from './chitietoghep.component';

describe('ChitietoghepComponent', () => {
  let component: ChitietoghepComponent;
  let fixture: ComponentFixture<ChitietoghepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChitietoghepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChitietoghepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
