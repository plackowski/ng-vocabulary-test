import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appColorAnswer]',
})
export class ColorAnswerDirective {
  @HostBinding('class.missed') isMissed: boolean;
  @HostBinding('class.correct') isCorrect: boolean;
  @HostBinding('class.incorrect') isIncorrect: boolean;

  @Input() set appColorAnswer(values: {
    selectedAnswerId: number;
    answerId: number;
    correctAnswerId: number;
  }) {
    const isOptionSelected = values.answerId === values.selectedAnswerId;

    this.isIncorrect =
      isOptionSelected && values.selectedAnswerId !== values.correctAnswerId;
    this.isCorrect =
      isOptionSelected && values.selectedAnswerId === values.correctAnswerId;
    this.isMissed =
      values.selectedAnswerId &&
      !this.isCorrect &&
      values.answerId === values.correctAnswerId;
  }
}
