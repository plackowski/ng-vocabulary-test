import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from '@app/shared/components/footer/footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule],
  exports: [FooterComponent],
})
export class SharedModule {}
