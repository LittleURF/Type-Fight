import { TestBed } from '@angular/core/testing';

import { GameScreenRouterService } from './game-screen-router.service';

describe('GameScreenRouterService', () => {
  let service: GameScreenRouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameScreenRouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
