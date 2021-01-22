import { TestBed } from '@angular/core/testing';

import { words } from '@app/core/data/words';
import { ConfigService } from '@app/core/services/config.service';
import { WordsService } from '@app/core/services/words.service';

describe('ConfigService', () => {
  let service: ConfigService;
  let wordService: any;

  beforeEach(() => {
    const wordsServiceSpy = jasmine.createSpyObj('WordService', {
      getWords: [...words.slice(10)],
    });
    TestBed.configureTestingModule({
      providers: [{ provide: WordsService, useValue: wordsServiceSpy }],
    });
  });

  beforeEach(() => {
    service = TestBed.inject(ConfigService);
    wordService = TestBed.inject(WordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get unique categories generated from word list', () => {
    expect(service.getCategories().length).toBe(10);
  });

  it('should get unique level generated from word list', () => {
    expect(service.getLevels().length).toBe(4);
  });

  it(`should get 0 as 'ALL' option as a first element of received categories list`, () => {
    const firstOption = service.getCategories()[0];
    expect(firstOption).toBe(0);
  });

  it(`should get 0 as 'ALL' option as a first element of received levels list`, () => {
    const firstOption = service.getLevels()[0];
    expect(firstOption).toBe(0);
  });
});
