import { TestBed } from '@angular/core/testing';

import { LoginInGuard } from './login-in.guard';

describe('LoginInGuard', () => {
  let guard: LoginInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
