import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyetdonlamchutroComponent } from './duyetdonlamchutro.component';

describe('DuyetdonlamchutroComponent', () => {
  let component: DuyetdonlamchutroComponent;
  let fixture: ComponentFixture<DuyetdonlamchutroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DuyetdonlamchutroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuyetdonlamchutroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
