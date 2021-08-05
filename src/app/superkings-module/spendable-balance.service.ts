import { Inject, Injectable } from '@angular/core';
import { IOrderProvider } from './order-provider.interface';

@Injectable({
  providedIn: 'root'
})
export class SpendableBalanceService {

  constructor(@Inject('OrderProvider') private provider: IOrderProvider) { }

  hello(): string {
    return `Hello! ${this.provider.hello()}`;
  }
}
