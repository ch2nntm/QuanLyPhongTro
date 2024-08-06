import { TestBed } from '@angular/core/testing';

import { PostBaiDangService } from './post-bai-dang.service';

describe('PostBaiDangService', () => {
  let service: PostBaiDangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostBaiDangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
