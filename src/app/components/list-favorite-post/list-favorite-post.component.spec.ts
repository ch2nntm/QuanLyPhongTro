import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFavoritePostComponent } from './list-favorite-post.component';

describe('ListFavoritePostComponent', () => {
  let component: ListFavoritePostComponent;
  let fixture: ComponentFixture<ListFavoritePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListFavoritePostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFavoritePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
