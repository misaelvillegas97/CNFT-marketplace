import { Component, Input, OnInit } from '@angular/core';
import { ICategory }               from '@shared/models/Category';
import { Collection, ICollection } from '@shared/models/Collection';
import { getFakeCollectionList }   from '@shared/utils/collections.utils';

@Component({
  selector: 'cf-collections-explore-list',
  templateUrl: './collections-explore-list.component.html',
  styleUrls: ['../../collections-explore.component.scss']
})
export class CollectionsExploreListComponent implements OnInit {

  @Input() category!: ICategory;
  collections: ICollection[] = [];

  constructor() { }

  ngOnInit(): void {
    this.collections = getFakeCollectionList();
  }

  collectionToCardConfig = (collection: ICollection) => Collection.convertToCardConfig(collection);


}
