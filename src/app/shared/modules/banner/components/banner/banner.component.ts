import { Component, Input, OnInit } from '@angular/core';
import { IBannerConfig }            from '@shared/modules/banner/domain/config.interface';

@Component({
  selector: 'cf-banner',
  templateUrl: './banner.component.html',
  styleUrls: [ './banner.component.scss' ]
})
export class BannerComponent implements OnInit {

  @Input() containerClasses?: string | string[];
  // Required parameter
  @Input() config!: IBannerConfig;

  constructor() { }

  ngOnInit(): void {
  }

  getClasses = (): Array<string> => [ ...this.config.image.customClass || [], 'banner-img' ];
  getStyles = (): Partial<CSSStyleDeclaration> => ({
    width: '100%',
    height: 'inherit',
    objectFit: 'cover',
    ...this.config.image.customStyle
  });
}
