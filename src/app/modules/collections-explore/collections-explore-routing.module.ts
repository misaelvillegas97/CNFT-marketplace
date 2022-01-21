import { NgModule }                    from '@angular/core';
import { RouterModule, Routes }        from '@angular/router';
import { CollectionsExploreComponent } from './collections-explore.component';

const routes: Routes = [
  {path: '', component: CollectionsExploreComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CollectionsExploreRoutingModule {}
