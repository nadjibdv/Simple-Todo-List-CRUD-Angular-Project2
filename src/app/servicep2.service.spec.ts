import { TestBed } from '@angular/core/testing';

import { Servicep2Service } from './servicep2.service';

describe('Servicep2Service', () => {
  let service: Servicep2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servicep2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
