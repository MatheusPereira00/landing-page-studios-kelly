import { TestBed } from '@angular/core/testing';

import { CiliosService } from './cilios.service';

describe('CiliosService', () => {
  let service: CiliosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CiliosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
