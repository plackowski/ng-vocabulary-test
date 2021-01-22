import { CategoryNamePipe } from './category-name.pipe';

describe('CategoryNamePipe', () => {
  const pipe = new CategoryNamePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should receive 'All' category if 0 as a value`, () => {
    expect(pipe.transform(0)).toBe('All');
  });

  it(`should receive 'General' category if 1 as a value`, () => {
    expect(pipe.transform(1)).toBe('General');
  });

  it(`should receive 'Technology' category if 2 as a value`, () => {
    expect(pipe.transform(2)).toBe('Technology');
  });

  it(`should receive 'Job' category if 3 as a value`, () => {
    expect(pipe.transform(3)).toBe('Job');
  });

  it(`should receive 'Human' category if 4 as a value`, () => {
    expect(pipe.transform(4)).toBe('Human');
  });

  it(`should receive 'Nature' category if 5 as a value`, () => {
    expect(pipe.transform(5)).toBe('Nature');
  });

  it(`should receive 'Food' category if 6 as a value`, () => {
    expect(pipe.transform(6)).toBe('Food');
  });

  it(`should receive 'Objects' category if 7 as a value`, () => {
    expect(pipe.transform(7)).toBe('Objects');
  });

  it(`should receive 'It' category if 8 as a value`, () => {
    expect(pipe.transform(8)).toBe('It');
  });

  it(`should receive 'Shopping' category if 9 as a value`, () => {
    expect(pipe.transform(9)).toBe('Shopping');
  });
});
