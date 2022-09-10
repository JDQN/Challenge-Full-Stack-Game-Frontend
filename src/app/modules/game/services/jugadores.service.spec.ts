import { TestBed } from '@angular/core/testing';

import { JugadoresService } from './jugadores.service';

describe('JugadoresService', () => {
  let service: JugadoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JugadoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
