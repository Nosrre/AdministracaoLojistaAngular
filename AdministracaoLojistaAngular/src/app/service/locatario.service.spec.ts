import { TestBed } from '@angular/core/testing';

import { LocatarioService } from './locatario.service';

describe('ClientService', () => {
  let service: LocatarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocatarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});