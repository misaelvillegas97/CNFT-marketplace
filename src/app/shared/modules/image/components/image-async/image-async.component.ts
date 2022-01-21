import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { animate, state, style, transition, trigger }                         from '@angular/animations';

@Component({
  selector: 'cf-image-async',
  templateUrl: './image-async.component.html',
  styleUrls: [ './image-async.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('imageAnimation', [
      state('show-image', style({
        opacity: '1',
      })),
      state('hide-image', style({
        opacity: '0'
      })),
      transition('show-image <=> hide-image', animate('1000ms ease-in')),
    ])
  ]
})
export class ImageAsyncComponent implements OnInit {

  @Input() alt?: string;
  @Input() styles?: Partial<CSSStyleDeclaration>;
  @Input() classes?: string[];
  @Input() containerStyles?: Partial<CSSStyleDeclaration>;

  imageCtrl: string = 'hide-image';
  contentCtrl: string = 'show-image';
  constructor() { }

  @ViewChild('lImage', { static: true }) lImage!: ElementRef;

  @Input() set src(src: string) {
    if (src) this.loadImage(src);
  }

  ngOnInit() {
    this.lImage.nativeElement.onload = () => {
      this.imageCtrl = 'show-image';
      this.contentCtrl = 'hide-image';
    };
  }

  loadImage(src: string) {
    this.imageCtrl = 'hide-image';
    this.contentCtrl = 'show-image';
    this.lImage.nativeElement.src = src;
  }

}
