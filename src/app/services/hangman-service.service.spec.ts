import { TestBed } from '@angular/core/testing';

import { HangmanServiceService } from './hangman-service.service';

describe('HangmanServiceService', () => {
  let service: HangmanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HangmanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
