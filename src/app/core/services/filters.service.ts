import { Injectable } from '@angular/core';

import { words } from '@app/core/data/words';
import { ConfigService } from '@app/core/services/config.service';
import { Word } from '@app/model/word';
import { Answer } from '@app/model/answer';
import { MODE } from '@app/model/mode';
import { TestedWord } from '@app/model/test-word';
import { TestConfig } from '@app/model/test-config';
import { LEVEL } from '@app/model/level';
import { CATEGORY } from '@app/model/category';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  private readonly ANSWER_COUNT = 4;

  private config: TestConfig = null;

  constructor(private configService: ConfigService) {
    this.config = this.configService.getConfig();
  }

  public getWordsWithAnswers(): TestedWord[] {
    const filteredWords = this.getFilteredWords();

    return filteredWords.length > 0
      ? this.getShuffledWordsWithAnswers(filteredWords)
      : [];
  }

  private getFilteredWords(): Word[] {
    const wordsByCategory = this.filterByCategory();
    return this.filterByLevel(wordsByCategory);
  }

  private filterByCategory(): Word[] {
    return this.config.category === CATEGORY.ALL
      ? words
      : words.filter((word: Word) => word.category === this.config.category);
  }

  private filterByLevel(currentWords: Word[]): Word[] {
    return this.config.level === LEVEL.ALL
      ? currentWords
      : currentWords.filter((word: Word) => word.level === this.config.level);
  }

  public getShuffledWordsWithAnswers(words: Word[]): TestedWord[] {
    const slicedWords = this.shuffle(words).slice(0, this.config.base_size);
    return slicedWords.map((word: Word) => this.addAnswers(word));
  }

  private shuffle(words: Word[]): Word[] {
    return [...words.sort(() => Math.random() - 0.5)];
  }

  private addAnswers(currentWord: Word): TestedWord {
    const filteredWords = this.shuffle(words).filter(
      (word: Word) => currentWord.id !== word.id
    );
    const answers = [currentWord, ...filteredWords.slice(0, this.ANSWER_COUNT)];
    const shuffledAnswers = this.shuffle(answers);

    return {
      word: currentWord,
      answers: this.transformAnswers(shuffledAnswers),
    };
  }

  private transformAnswers(words: Word[]): Answer[] {
    return words.map((word: Word) => {
      return {
        id: word.id,
        value: this.config.mode === MODE.LANG_PL ? word.polish : word.english,
      };
    });
  }
}
