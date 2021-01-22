import { Injectable } from '@angular/core';

import { Word } from '@app/model/word';
import { words } from '@app/core/data/words';

@Injectable({
  providedIn: 'root',
})
export class WordsService {
  constructor() {}

  public getWords(): Word[] {
    return words;
  }
}
