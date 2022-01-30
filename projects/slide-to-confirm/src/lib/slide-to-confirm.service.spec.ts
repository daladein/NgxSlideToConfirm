import { TestBed } from '@angular/core/testing';

import { SlideToConfirmService } from './slide-to-confirm.service';

describe('SlideToConfirmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlideToConfirmService = TestBed.get(SlideToConfirmService);
    expect(service).toBeTruthy();
  });
});
