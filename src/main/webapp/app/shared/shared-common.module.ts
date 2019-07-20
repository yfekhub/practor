import { NgModule } from '@angular/core';

import { PractorSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [PractorSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [PractorSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class PractorSharedCommonModule {}
