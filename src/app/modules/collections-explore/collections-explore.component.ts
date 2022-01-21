import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IBannerConfig }                        from '@shared/modules/banner/domain/config.interface';
import { getDummyBanner, getFakeCategories }    from '@shared/utils/collections.utils';
import { ICategory }                            from '@shared/models/Category';

@Component({
  selector: 'cf-collections-explore',
  templateUrl: './collections-explore.component.html',
  styleUrls: [ './collections-explore.component.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class CollectionsExploreComponent implements OnInit {

  categories: ICategory[] = [];
  selectedCategoryIndex: number = 0;

  banner: IBannerConfig;

  constructor() {
    this.banner = this.getDummyBanner();
  }

  ngOnInit(): void {
    this.categories = getFakeCategories();
  }

  getDummyBanner = (): IBannerConfig => getDummyBanner();

  changeSelectedCategory = (categoryIndex: number): void => {
    this.selectedCategoryIndex = categoryIndex;
  };


}
