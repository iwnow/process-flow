import { TestBed, inject } from '@angular/core/testing';

import { PfComponentsService } from './pf-components.service';

describe('PfComponentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PfComponentsService]
    });
  });

  it('should be created', inject([PfComponentsService], (service: PfComponentsService) => {
    expect(service).toBeTruthy();
  }));
});
