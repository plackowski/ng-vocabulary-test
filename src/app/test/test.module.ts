import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { TestComponent } from '@app/test/test.component';
import { CounterComponent } from '@app/test/counter/counter.component';
import { WordsComponent } from '@app/test/words/words.component';
import { WordComponent } from '@app/test/words/word/word.component';
import { WordHeaderComponent } from '@app/test/words/word/word-header/word-header.component';
import { WordButtonsComponent } from '@app/test/words/word/word-buttons/word-buttons.component';
import { WordButtonComponent } from '@app/test/words/word/word-buttons/word-button/word-button.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'test',
    pathMatch: 'full',
  },
  {
    path: 'test',
    component: TestComponent,
  },
];

@NgModule({
  declarations: [
    TestComponent,
    CounterComponent,
    WordsComponent,
    WordComponent,
    WordHeaderComponent,
    WordButtonsComponent,
    WordButtonComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class TestModule {}
