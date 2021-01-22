import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ColorAnswerDirective } from '@app/shared/directives/color-answer.directive';

// #docregion test-component
@Component({
  template: `
    <ul>
      <li
        [appColorAnswer]="{
          answerId: 1,
          selectedAnswerId: 1,
          correctAnswerId: 1
        }"
      >
        Correct option
      </li>
      <li
        [appColorAnswer]="{
          answerId: 2,
          selectedAnswerId: 2,
          correctAnswerId: 1
        }"
      >
        Incorrect option
      </li>
      <li
        [appColorAnswer]="{
          answerId: 1,
          selectedAnswerId: 2,
          correctAnswerId: 1
        }"
      >
        Missed option
      </li>
    </ul>
  `,
})
class TestComponent {}
// #enddocregion test-component

describe('ColorAnswerDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let lis: DebugElement[];

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ColorAnswerDirective, TestComponent],
    }).createComponent(TestComponent);

    fixture.detectChanges();
    lis = fixture.debugElement.queryAll(By.directive(ColorAnswerDirective));
  });

  it('should create an instance', () => {
    const directive = new ColorAnswerDirective();
    expect(directive).toBeTruthy();
  });

  it(`should add 'correct' class if selectedAnswerId and correctAnswerId are the same`, () => {
    const li = lis[0].nativeElement;
    expect(li.className).toEqual('correct');
  });

  it(`should add 'incorrect' class if selectedAnswerId and correctAnswerId are not the same`, () => {
    const li = lis[1].nativeElement;
    expect(li.className).toEqual('incorrect');
  });

  it(`should add 'missed' class if answerId and correctAnswerId are the same, but the option is not correct`, () => {
    const li = lis[2].nativeElement;
    expect(li.className).toEqual('missed');
  });
});
