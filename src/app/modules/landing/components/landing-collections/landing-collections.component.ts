import { Component, OnInit }  from '@angular/core';
import { ICardConfig }        from '@shared/modules/card/domain/config.interface';
import { getFakeCollectionsCardConfig } from '@shared/utils/collections.utils';

@Component({
  selector: 'cf-landing-collections',
  templateUrl: './landing-collections.component.html',
  styleUrls: [ './landing-collections.component.scss' ]
})
export class LandingCollectionsComponent implements OnInit {

  collections: ICardConfig[];

  constructor() {
    this.collections = [];
  }

  ngOnInit(): void {
    this.collections = getFakeCollectionsCardConfig();
  }

  action = ($event: any) => console.log($event);
}
