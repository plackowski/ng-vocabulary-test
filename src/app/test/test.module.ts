import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { TestComponent } from '@app/test/test.component';
import { SetupComponent } from '@app/test/setup/setup.component';
import { StartComponent } from '@app/test/start/start.component';

export const routes: Routes = [
  {
    path: '',
    component: TestComponent,
  },
];

@NgModule({
  declarations: [TestComponent, SetupComponent, StartComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class TestModule {}
