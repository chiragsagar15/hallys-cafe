import { Component, computed, signal } from '@angular/core';
import { MenuCard } from './menu-card/menu-card';
import { menuData } from '../../../data/menuData';

@Component({
  selector: 'app-menu',
  imports: [MenuCard],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  categories = ['All', ...new Set(menuData.map((item) => item.category))];

  selectedCategory = signal('All');

  filteredMenu = computed(() => {
    if (this.selectedCategory() === 'All') {
      return menuData;
    }

    return menuData.filter((product) => product.category === this.selectedCategory());
  });
}
