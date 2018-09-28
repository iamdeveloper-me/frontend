import { TestBed, inject } from '@angular/core/testing';

import { JobServicesService } from './job-services.service';

describe('JobServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobServicesService]
    });
  });

  it('should be created', inject([JobServicesService], (service: JobServicesService) => {
    expect(service).toBeTruthy();
  }));
});
