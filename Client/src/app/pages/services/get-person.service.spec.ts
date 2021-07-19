import { TestBed } from '@angular/core/testing';

import { GetPersonService } from './get-person.service';

describe('GetPersonService', () => {
  let service: GetPersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
