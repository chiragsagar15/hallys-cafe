import { Component } from '@angular/core';
import { menuData } from '../../../data/menuData';
import { MenuCard } from '../../menuPage/menu/menu-card/menu-card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-featured-flavours',
  imports: [MenuCard, RouterLink],
  templateUrl: './featured-flavours.html',
  styleUrl: './featured-flavours.css',
})
export class FeaturedFlavours {
  featuredMenu = menuData.filter((product) => product.featured === true);
}
