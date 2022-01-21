import { NgModule }        from '@angular/core';
import { CommonModule }    from '@angular/common';
import { ImageModule }     from '@shared/modules/image/image.module';
import { BannerComponent } from './components/banner/banner.component';



@NgModule({
  declarations: [
    BannerComponent,
  ],
  exports: [
    BannerComponent
  ],
  imports: [
    CommonModule,
    ImageModule
  ]
})
export class BannerModule { }
