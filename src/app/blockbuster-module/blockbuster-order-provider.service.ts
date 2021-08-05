import { Injectable } from '@angular/core';
import { IOrderProvider } from '../superkings-module/order-provider.interface';

@Injectable({
  providedIn: 'root'
})
export class BlockbusterOrderProvider implements IOrderProvider {

  constructor() { }

  hello(): string {
    return 'Blockbuster Provider';
  }
}
