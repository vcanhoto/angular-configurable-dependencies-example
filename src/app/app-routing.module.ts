import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'insights',
    loadChildren: () =>
      import('./insights-feature/insights-feature.module').then(
        m => m.InsightsFeatureModule
      ),
  },
  {
    path: 'timeline',
    loadChildren: () =>
      import('./timeline-feature/timeline-feature.module').then(
        m => m.TimelineFeatureModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
