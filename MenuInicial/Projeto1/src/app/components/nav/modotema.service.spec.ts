import { TestBed } from '@angular/core/testing';

import { ModotemaService } from './modotema.service';

describe('ModotemaService', () => {
  let service: ModotemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModotemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
