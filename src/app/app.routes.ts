import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent), title: 'El Nopal Dorado · Inicio' },
  { path: 'galeria', loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent), title: 'Galería · El Nopal Dorado' },
  { path: 'ubicaciones', loadComponent: () => import('./pages/locations/locations.component').then(m => m.LocationsComponent), title: 'Ubicaciones · El Nopal Dorado' },
  { path: 'nosotros', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent), title: 'Misión y Visión · El Nopal Dorado' },
  { path: 'menu', loadComponent: () => import('./pages/menu/menu.component').then(m => m.MenuComponent), title: 'Menú · El Nopal Dorado' },
  { path: '**', redirectTo: '' }
];
