import { TestBed } from '@angular/core/testing';

import { PasswordResolver } from './password.resolver';

describe('PasswordResolver', () => {
  let resolver: PasswordResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PasswordResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
