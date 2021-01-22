import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MockPipe } from 'ng-mocks';

import { StateService } from '@app/core/services/state.service';
import { LevelPipe } from '@app/shared/pipes/level.pipe';
import { MaterialModule } from '@app/material.module';
import { MESSAGES } from '@app/core/constants/messages';
import { SetupComponent } from '@app/test/setup/setup.component';
import { CategoryNamePipe } from '@app/shared/pipes/category-name.pipe';

describe('SetupComponent', () => {
  let component: SetupComponent;
  let fixture: ComponentFixture<SetupComponent>;
  let el: DebugElement;
  let stateServiceSpy: StateService;

  const validValues = {
    category: 1,
    level: 1,
    mode: 1,
    base_size: 5,
  };

  beforeEach(async () => {
    stateServiceSpy = jasmine.createSpyObj('StateService', ['markTestAsReady']);

    await TestBed.configureTestingModule({
      declarations: [
        SetupComponent,
        MockPipe(CategoryNamePipe),
        MockPipe(LevelPipe),
      ],
      providers: [
        {
          provide: StateService,
          useValue: stateServiceSpy,
        },
      ],
      imports: [MaterialModule, NoopAnimationsModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show welcome message', () => {
    const msg = el.queryAll(By.css('.welcome'));

    expect(msg.length).toBe(1);
    expect(msg[0].nativeElement.textContent).toContain(MESSAGES.WELCOME);
  });

  it('should show setup form', () => {
    const form = el.queryAll(By.css('form'));
    const fields = el.queryAll(By.css('.mat-form-field'));

    expect(form).toBeDefined();
    expect(fields.length).toBe(4);
  });

  it('should disbled all form items besides category at the beginning', () => {
    const fields = el.queryAll(By.css('.mat-form-field'));
    let disabledField = 0;

    fields.forEach((field) => {
      if (field.classes['mat-form-field-disabled']) {
        disabledField += 1;
      }
    });
    expect(disabledField).toBe(3);
  });

  it('should enabled level field if category is selected', () => {
    component.onCategoryChange();
    fixture.detectChanges();

    const level = el.queryAll(By.css('.mat-form-field'))[1];
    expect(level.classes['mat-form-field-disabled']).toBeUndefined();
  });

  it('should enabled rest of the fields if category and level are selected', () => {
    component.onCategoryChange();
    component.onLevelChange();
    fixture.detectChanges();

    const fields = el.queryAll(By.css('.mat-form-field'));
    let disabledField = 0;

    fields.forEach((field) => {
      if (field.classes['mat-form-field-disabled']) {
        disabledField += 1;
      }
    });
    expect(disabledField).toBe(0);
  });

  it('should mark test as ready if the form is valid', () => {
    component.formGroup.patchValue(validValues);
    component.onSubmit();

    expect(stateServiceSpy.markTestAsReady).toHaveBeenCalledTimes(1);
  });

  it('should not mark test as ready if the form is not valid', () => {
    component.formGroup.patchValue({
      ...validValues,
      category: null,
    });
    component.onSubmit();

    expect(stateServiceSpy.markTestAsReady).not.toHaveBeenCalled();
  });
});
