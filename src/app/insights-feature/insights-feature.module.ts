import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsightsFeatureRoutingModule } from './insights-feature-routing.module';
import { SuperkingsOrderProvider } from '../superkings-module/superkings-order-provider.service';
import { InsightsFeature } from './insights-feature.component';
import { SpendableBalanceService } from '../superkings-module/spendable-balance.service';


@NgModule({
  declarations: [
    InsightsFeature
  ],
  imports: [
    CommonModule,
    InsightsFeatureRoutingModule
  ],
  entryComponents: [InsightsFeature],
  providers: [
    {provide: 'OrderProvider', useClass: SuperkingsOrderProvider},
    SpendableBalanceService
  ]
})
export class InsightsFeatureModule {}
