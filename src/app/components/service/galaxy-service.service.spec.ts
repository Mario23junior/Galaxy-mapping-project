import { TestBed } from '@angular/core/testing';

import { GalaxyServiceService } from './galaxy-service.service';

describe('GalaxyServiceService', () => {
  let service: GalaxyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalaxyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
