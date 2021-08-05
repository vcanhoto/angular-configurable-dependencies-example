import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsightsFeature } from './insights-feature.component';

const routes: Routes = [
  { path: '', component: InsightsFeature },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsightsFeatureRoutingModule { }
