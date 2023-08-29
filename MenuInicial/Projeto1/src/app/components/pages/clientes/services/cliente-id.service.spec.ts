import { TestBed } from '@angular/core/testing';

import { ClienteIdService } from './cliente-id.service';

describe('ClienteIdService', () => {
  let service: ClienteIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
