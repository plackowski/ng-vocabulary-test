import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { ConfigService } from '@app/core/services/config.service';
import { Answer } from '@app/model/answer';
import { MODE } from '@app/model/mode';
import { TestedWord } from '@app/model/test-word';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordComponent implements AfterViewInit, OnInit {
  @Input() public testedWord!: TestedWord;

  public starsClass = '';
  public word = '';
  public answerClass = '';
  public isPolish = true;
  public isSelected = false;
  public selectedAnswerId: number = null;

  constructor(
    private configService: ConfigService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.isPolish = this.configService.getConfig().mode === MODE.PL_LANG;
  }

  public ngAfterViewInit(): void {
    if (this.testedWord) {
      this.setTemplateValues();
      this.changeDetectorRef.detectChanges();
    }
  }

  private setTemplateValues(): void {
    this.word = this.isPolish
      ? this.testedWord.word.polish
      : this.testedWord.word.english;
    this.starsClass = `x${this.testedWord.word.level}`;
  }

  public check(word: Answer): void {
    this.selectedAnswerId = word.id;
    this.isSelected = true;
  }
}
