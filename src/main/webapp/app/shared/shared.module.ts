import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PractorSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [PractorSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [PractorSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PractorSharedModule {
  static forRoot() {
    return {
      ngModule: PractorSharedModule
    };
  }
}
