import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIUserComponent } from './uiuser.component';

describe('UIUserComponent', () => {
  let component: UIUserComponent;
  let fixture: ComponentFixture<UIUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UIUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UIUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
