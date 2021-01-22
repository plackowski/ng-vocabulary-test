import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@app/material.module';
import { LogoComponent } from '@app/shared/components/logo/logo.component';
import { ToggleComponent } from '@app/shared/components/toggle/toggle.component';
import { WordComponent } from '@app/shared/components/word/word.component';
import { LevelPipe } from '@app/shared/pipes/level.pipe';
import { CategoryNamePipe } from '@app/shared/pipes/category-name.pipe';
import { ColorAnswerDirective } from './directives/color-answer.directive';

@NgModule({
  declarations: [
    LogoComponent,
    ToggleComponent,
    WordComponent,
    LevelPipe,
    CategoryNamePipe,
    ColorAnswerDirective,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    LogoComponent,
    ToggleComponent,
    WordComponent,
    LevelPipe,
    CategoryNamePipe,
  ],
})
export class SharedModule {}
