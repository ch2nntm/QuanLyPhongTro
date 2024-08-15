import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authguardserviceGuard } from './authguardservice.guard';

describe('authguardserviceGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authguardserviceGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
