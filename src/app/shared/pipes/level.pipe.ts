import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'level',
})
export class LevelPipe implements PipeTransform {
  private map: Map<number, string> = new Map([
    [0, 'All'],
    [1, 'Basic'],
    [2, 'Medium'],
    [3, 'Advanced'],
  ]);

  transform(value: number, ...args: unknown[]): unknown {
    return this.map.get(value);
  }
}
