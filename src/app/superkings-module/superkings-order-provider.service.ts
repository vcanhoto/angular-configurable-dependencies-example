import { Injectable } from '@angular/core';
import { IOrderProvider } from './order-provider.interface';

@Injectable({
  providedIn: 'root'
})
export class SuperkingsOrderProvider implements IOrderProvider {

  constructor() { }

  hello(): string {
    return 'Superkings Provider';
  }
}
