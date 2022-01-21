import { CUSTOM_ELEMENTS_SCHEMA, NgModule }  from '@angular/core';
import { CommonModule }                      from '@angular/common';
import { SharedModule }                      from '@shared/shared.module';
import { MaterialModule }                    from '@shared/material.module';
import { LandingRoutingModule }              from './landing-routing.module';
import { LandingComponent }                  from './landing.component';
import { LandingHeaderComponent }            from './components/landing-header/landing-header.component';
import { LandingCollectionsComponent }       from './components/landing-collections/landing-collections.component';
import { LandingStoresCollectionsComponent } from './components/landing-stores-collections/landing-stores-collections.component';
import { LandingBannerComponent }            from './components/landing-banner/landing-banner.component';
import { CardModule }                        from '@shared/modules/card/card.module';


@NgModule({
  declarations: [
    LandingComponent,
    LandingHeaderComponent,
    LandingCollectionsComponent,
    LandingStoresCollectionsComponent,
    LandingBannerComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    MaterialModule,
    CardModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class LandingModule {}
