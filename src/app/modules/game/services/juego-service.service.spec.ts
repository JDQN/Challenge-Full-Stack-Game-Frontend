import { TestBed } from '@angular/core/testing';

import { JuegoServiceService } from './juego-service.service';

describe('JuegoServiceService', () => {
  let service: JuegoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuegoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
