import { TestBed } from '@angular/core/testing';

import { ConfigService } from '@app/core/services/config.service';
import { configMock } from '@app/core/data/mocks/config';
import { FiltersService } from '@app/core/services/filters.service';
import { TestedWord } from '@app/model/test-word';
import { words } from '@app/core/data/words';
import { Answer } from '@app/model/answer';

describe('FiltersService', () => {
  let service: FiltersService;
  let configService: any;

  const mockC = {
    ...configMock,
  };

  const mockW = {
    ...words[0],
  };

  beforeEach(() => {
    const configServicSpy = jasmine.createSpyObj('ConfigService', {
      getConfig: mockC,
    });
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ConfigService,
          useValue: configServicSpy,
        },
      ],
    });
    service = TestBed.inject(FiltersService);
    configService = TestBed.inject(ConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should filter by category id if needed', () => {
    const words = service
      .getWordsWithAnswers()
      .some((word: TestedWord) => word.word.category !== mockC.category);
    expect(words).toBe(false);
  });

  it('should get array of words with a different ordering if shuffle i used', () => {
    const words = service
      .getWordsWithAnswers()
      .some((word: TestedWord) => word.word.level !== mockC.level);
    expect(words).toBe(false);
  });

  it('should add answers properly to the word if needed', () => {
    const words = service.getWordsWithAnswers();

    words.forEach((word: TestedWord) => {
      expect(word.answers.length).toBe(5);
    });
  });

  it('should transform answers in a proper way if needed', () => {
    service
      .getWordsWithAnswers()
      .map((word: TestedWord) => word.answers)
      .forEach((answers: Answer[]) => {
        answers.forEach((answer: Answer) => {
          expect(answer.id).toBeDefined();
          expect(answer.value).toBeDefined();
        });
      });
  });
});
