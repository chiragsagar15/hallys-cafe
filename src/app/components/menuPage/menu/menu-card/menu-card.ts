import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { type MenuItem } from '../../../../models/menuItem.model';

@Component({
  selector: 'app-menu-card',
  imports: [CurrencyPipe],
  templateUrl: './menu-card.html',
  styleUrl: './menu-card.css',
})
export class MenuCard {
  product = input.required<MenuItem>();
}
