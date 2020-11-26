import {TestBed} from '@angular/core/testing';

import {ApartmentListResolver} from './apartment-list-resolver';

describe('ApartmentListResolverService', () => {
  let service: ApartmentListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApartmentListResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
