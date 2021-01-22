import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
} from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

import { testedWordsMock } from '@app/core/data/mocks/tested-words';
import { configMock } from '@app/core/data/mocks/config';
import { ConfigService } from '@app/core/services/config.service';
import { WordComponent } from '@app/shared/components/word/word.component';
import { MODE } from '@app/model/mode';
import { ColorAnswerDirective } from '@app/shared/directives/color-answer.directive';

describe('WordComponent', () => {
  let component: WordComponent;
  let fixture: ComponentFixture<WordComponent>;
  let configService: any;
  let el: DebugElement;

  const mock = {
    ...configMock,
  };

  const setPLEnMode = () => {
    configService.getConfig.and.returnValue({
      ...mock,
      mode: MODE.LANG_PL,
    });
    fixture.detectChanges();
  };

  beforeEach(async () => {
    const configServicSpy = jasmine.createSpyObj('ConfigService', [
      'getConfig',
    ]);

    await TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [WordComponent, ColorAnswerDirective],
      providers: [
        {
          provide: ConfigService,
          useValue: configServicSpy,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordComponent);
    component = fixture.componentInstance;
    configService = TestBed.inject(ConfigService);
    component.testedWord = testedWordsMock[0];
    el = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show word in polish if user set PL - EN as a mode', () => {
    configService.getConfig.and.returnValue(mock);
    fixture.detectChanges();
    const word = el.query(By.css('.word'));
    expect(word.nativeElement.textContent).toBe(
      component.testedWord.word.polish
    );
  });

  it('should show word in english if user set EN - PL as a mode', () => {
    setPLEnMode();
    const word = el.query(By.css('.word'));
    expect(word.nativeElement.textContent).toBe(
      component.testedWord.word.english
    );
  });

  it('should show answers for each word', () => {
    setPLEnMode();
    const answers = el.queryAll(By.css('li'));
    expect(answers.length).toBe(5);
  });

  it(`should set css class 'correct' is user select on good answer `, fakeAsync(() => {
    setPLEnMode();
    const answer = el.queryAll(By.css('li'))[0];

    answer.nativeElement.click();
    fixture.detectChanges();

    flush();

    expect(answer.nativeElement.className).toEqual('correct');
  }));

  it(`should set css 'incorrect' ans 'missed' classes is user select on wrong answer `, fakeAsync(() => {
    setPLEnMode();
    const goodAnswer = el.queryAll(By.css('li'))[0];
    const wrongAnswer = el.queryAll(By.css('li'))[1];

    wrongAnswer.nativeElement.click();
    fixture.detectChanges();

    flush();

    expect(wrongAnswer.nativeElement.className).toEqual('incorrect');
    expect(goodAnswer.nativeElement.className).toEqual('missed');
  }));
});
