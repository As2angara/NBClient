import { TestBed } from '@angular/core/testing';

import { OnlineMenuService } from './online-menu.service';

describe('OnlineMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnlineMenuService = TestBed.get(OnlineMenuService);
    expect(service).toBeTruthy();
  });
});
