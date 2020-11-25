import { TestBed } from '@angular/core/testing';

import { HotPageService } from './hot-page.service';

describe('HotPageServiceService', () => {
  let service: HotPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
