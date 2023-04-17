import { TestBed } from '@angular/core/testing';

import { GamedealApiService } from './gamedeal-api.service';

describe('GamedealApiService', () => {
  let service: GamedealApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamedealApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
