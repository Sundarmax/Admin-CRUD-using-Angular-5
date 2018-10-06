import { TestBed, inject } from '@angular/core/testing';

import { FlightserviceService } from './flightservice.service';

describe('FlightserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightserviceService]
    });
  });

  it('should be created', inject([FlightserviceService], (service: FlightserviceService) => {
    expect(service).toBeTruthy();
  }));
});
