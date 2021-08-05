import { Component, OnInit } from '@angular/core';
import { SpendableBalanceService } from '../superkings-module/spendable-balance.service';

@Component({
  selector: 'timeline',
  templateUrl: './timeline-feature.component.html',
})
export class TimelineFeature implements OnInit {

  constructor(private spendableBalanceService: SpendableBalanceService) { }

  ngOnInit(): void {
    console.log(`Timeline feature! ${this.spendableBalanceService.hello()}`);
  }

  getServiceUsed() {
    return this.spendableBalanceService.hello();
  }
}
