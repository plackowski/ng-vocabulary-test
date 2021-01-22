import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryName',
})
export class CategoryNamePipe implements PipeTransform {
  private map: Map<number, string> = new Map([
    [0, 'All'],
    [1, 'General'],
    [2, 'Technology'],
    [3, 'Job'],
    [4, 'Human'],
    [5, 'Nature'],
    [6, 'Food'],
    [7, 'Objects'],
    [8, 'It'],
    [9, 'Shopping'],
  ]);

  transform(value: number, ...args: unknown[]): unknown {
    return this.map.get(value);
  }
}
