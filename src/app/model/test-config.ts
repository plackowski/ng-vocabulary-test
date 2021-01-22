import { CATEGORY } from './category';
import { LEVEL } from './level';
import { MODE } from './mode';

export interface TestConfig {
  category: CATEGORY;
  level: LEVEL;
  mode: MODE;
  base_size: number;
}
