import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { Features } from '../features/features';
import { FeaturedFlavours } from '../featured-flavours/featured-flavours';
import { VisitUs } from '../visit-us/visit-us';

@Component({
  selector: 'app-home',
  imports: [Hero, Features, FeaturedFlavours, VisitUs],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
