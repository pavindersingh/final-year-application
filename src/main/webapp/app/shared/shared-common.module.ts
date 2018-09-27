import { NgModule } from '@angular/core';

import { FinalyearapplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [FinalyearapplicationSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [FinalyearapplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class FinalyearapplicationSharedCommonModule {}
