import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineFeatureRoutingModule } from './timeline-feature-routing.module';
import { BlockbusterOrderProvider } from '../blockbuster-module/blockbuster-order-provider.service';
import { TimelineFeature } from './timeline-feature.component';
import { SpendableBalanceService } from '../superkings-module/spendable-balance.service';


@NgModule({
  declarations: [
    TimelineFeature
  ],
  imports: [
    CommonModule,
    TimelineFeatureRoutingModule
  ],
  entryComponents: [TimelineFeature],
  providers: [
    {provide: 'OrderProvider', useClass: BlockbusterOrderProvider},
    SpendableBalanceService
  ]
})
export class TimelineFeatureModule {}
