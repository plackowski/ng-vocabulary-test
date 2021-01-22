import { LevelPipe } from './level.pipe';

describe('LevelPipe', () => {
  const pipe = new LevelPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should receive 'All' level if 0 as a value`, () => {
    expect(pipe.transform(0)).toBe('All');
  });

  it(`should receive 'Basic' level if 1 as a value`, () => {
    expect(pipe.transform(1)).toBe('Basic');
  });

  it(`should receive 'Medium' level if 2 as a value`, () => {
    expect(pipe.transform(2)).toBe('Medium');
  });

  it(`should receive 'Advanced' level if 3 as a value`, () => {
    expect(pipe.transform(3)).toBe('Advanced');
  });
});
