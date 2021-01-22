import { TestBed } from '@angular/core/testing';

import { words } from '@app/core/data/words';
import { WordsService } from '@app/core/services/words.service';

describe('WordsService', () => {
  let service: WordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all words', () => {
    expect(service.getWords().length).toBe(words.length);
  });
});
