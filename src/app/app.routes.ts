import { Routes } from '@angular/router';
import { Menu } from './components/menuPage/menu/menu';
import { Home } from './components/homePage/home/home';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: "Home | Hally's",
  },
  {
    path: 'menu',
    component: Menu,
    title: "Menu | Hally's",
  },
  {
    path: 'about',
    component: About,
    title: "About Us | Hally's",
  },

  {
    path: 'contact',
    component: Contact,
    title: "Contact | Hally's",
  },

  {
    path: '**',
    redirectTo: '',
  },
];
