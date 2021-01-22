import { Injectable } from '@angular/core';

import { TestConfig } from '@app/model/test-config';
import { WordsService } from '@app/core/services/words.service';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private testConfig: TestConfig = null;

  constructor(private wordsService: WordsService) {}

  public saveConfig(testConfig: TestConfig): void {
    this.testConfig = testConfig;
  }

  public getConfig(): TestConfig {
    return this.testConfig;
  }

  public getCategories(): number[] {
    const categories = this.wordsService
      .getWords()
      .map((word: any) => word.category);
    categories.unshift(0);
    return [...new Set(categories)];
  }

  public getLevels(): number[] {
    const levels = this.wordsService.getWords().map((word: any) => word.level);
    levels.unshift(0);
    return [...new Set(levels)];
  }
}
