import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimelineFeature } from './timeline-feature.component';

const routes: Routes = [
  { path: '', component: TimelineFeature },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimelineFeatureRoutingModule { }
