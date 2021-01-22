import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponent } from 'ng-mocks';

import { WordComponent } from '@app/shared/components/word/word.component';
import { testedWordsMock } from '@app/core/data/mocks/tested-words';
import { FiltersService } from '@app/core/services/filters.service';
import { StartComponent } from '@app/test/start/start.component';

describe('StartComponent', () => {
  let component: StartComponent;
  let fixture: ComponentFixture<StartComponent>;
  let filtersService: any;
  let components: DebugElement[];

  const mock = [...testedWordsMock];

  beforeEach(async () => {
    const filtersServiceSpy = jasmine.createSpyObj('FiltersService', {
      getWordsWithAnswers: mock,
    });
    await TestBed.configureTestingModule({
      declarations: [StartComponent, MockComponent(WordComponent)],
      providers: [{ provide: FiltersService, useValue: filtersServiceSpy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartComponent);
    component = fixture.componentInstance;
    filtersService = TestBed.inject(FiltersService);
    fixture.detectChanges();
    components = fixture.debugElement.queryAll(By.css('app-word'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show mocked words', () => {
    expect(components.length).toBe(mock.length);
  });
});
