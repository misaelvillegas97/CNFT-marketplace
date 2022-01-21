import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';
import { CardComponent }         from './components/card/card.component';
import { MaterialModule }        from '@shared/material.module';
import { SharedModule }          from '@shared/shared.module';
import { NftOwnerCardComponent } from './components/nft-owner-card/nft-owner-card.component';
import { CardCustomComponent }   from './components/card-custom/card-custom.component';
import { ImageModule }           from '@shared/modules/image/image.module';


@NgModule({
  declarations: [
    CardComponent, NftOwnerCardComponent, CardCustomComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ImageModule
  ],
  exports: [
    CardComponent,
    CardCustomComponent,
    NftOwnerCardComponent
  ]
})
export class CardModule {}
