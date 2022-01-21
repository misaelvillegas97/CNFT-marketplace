import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICardConfig }                                    from '@shared/modules/card/domain/config.interface';

@Component({
  selector: 'cf-card-custom',
  templateUrl: './card-custom.component.html',
  styleUrls: [ './card-custom.component.scss' ]
})
export class CardCustomComponent implements OnInit {
  @Input() config!: ICardConfig;
  @Input() containerClasses?: string[] | string;
  @Input() cardStyles: Partial<CSSStyleDeclaration> = {};
  @Input() cardBodyStyles: Partial<CSSStyleDeclaration> = {};
  @Input() cardActionsStyles: Partial<CSSStyleDeclaration> = {};
  @Output() actionClick: EventEmitter<any> = new EventEmitter();
  @Output() secondaryAction: EventEmitter<any> = new EventEmitter();

  image?: Partial<CSSStyleDeclaration>;

  constructor() { }

  ngOnInit(): void {
    if (this.config.textAlign) this.cardBodyStyles.textAlign = this.config.textAlign;
  }

  action($event: any) {
    $event.stopPropagation();
    $event.preventDefault();
    this.config.action?.action($event, this.actionClick);
  }

  getClasses = (): Array<string> => [ 'card-img' ];
  getStyles = (): Partial<CSSStyleDeclaration> => ({
    objectFit: 'cover',
    width: '100%',
    height: this.config.image?.height || 'auto'
  });
}
