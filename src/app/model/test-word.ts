import { Answer } from './answer';
import { Word } from './word';

export interface TestedWord {
  word: Word;
  answers: Answer[];
}
