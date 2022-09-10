import { TestBed } from '@angular/core/testing';

import { WebSocketserviceTsService } from './web-socketservice.ts.service';

describe('WebSocketserviceTsService', () => {
  let service: WebSocketserviceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebSocketserviceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
