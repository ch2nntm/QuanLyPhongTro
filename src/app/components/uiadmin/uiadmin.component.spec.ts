import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIAdminComponent } from './uiadmin.component';

describe('UIAdminComponent', () => {
  let component: UIAdminComponent;
  let fixture: ComponentFixture<UIAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UIAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UIAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
