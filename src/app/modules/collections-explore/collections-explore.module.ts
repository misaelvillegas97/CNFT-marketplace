import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsExploreRoutingModule } from './collections-explore-routing.module';
import { SharedModule }                    from '@shared/shared.module';
import { MaterialModule }                  from '@shared/material.module';
import { CardModule }                      from '@shared/modules/card/card.module';
import { CollectionsExploreComponent }     from './collections-explore.component';
import { BannerModule }                    from '@shared/modules/banner/banner.module';
import { CollectionsExploreListComponent } from './components/collections-explore-list/collections-explore-list.component';

@NgModule({
  declarations: [
    CollectionsExploreComponent, CollectionsExploreListComponent
  ],
  imports: [
    CommonModule,
    CollectionsExploreRoutingModule,
    SharedModule,
    MaterialModule,
    CardModule,
    BannerModule
  ]
})
export class CollectionsExploreModule { }
