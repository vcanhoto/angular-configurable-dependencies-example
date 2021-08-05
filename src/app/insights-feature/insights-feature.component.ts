import { Component, OnInit } from '@angular/core';
import { SpendableBalanceService } from '../superkings-module/spendable-balance.service';

@Component({
  selector: 'insights',
  templateUrl: './insights-feature.component.html',
})
export class InsightsFeature implements OnInit {

  constructor(private spendableBalanceService: SpendableBalanceService) { }

  ngOnInit(): void {
    console.log(`Insights feature! ${this.spendableBalanceService.hello()}`);
  }

  getServiceUsed() {
    return this.spendableBalanceService.hello();
  }
}
