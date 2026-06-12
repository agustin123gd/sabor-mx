import { Component, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PapelPicadoComponent } from '../../shared/components/papel-picado/papel-picado.component';
import { MENU, MenuCategory } from '../../shared/data/menu';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [PapelPicadoComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  readonly categories: MenuCategory[] = MENU;
  readonly activeCategory = signal<string>(MENU[0].id);
  readonly qrUrl: SafeResourceUrl;
  readonly menuPageUrl: string;

  constructor(sanitizer: DomSanitizer) {
    // Construye la URL absoluta de esta página para generar el código QR.
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    this.menuPageUrl = `${origin}/menu`;

    const qrApi = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=8&color=2B2118&bgcolor=FBF6EC&data=${encodeURIComponent(this.menuPageUrl)}`;
    this.qrUrl = sanitizer.bypassSecurityTrustResourceUrl(qrApi);
  }

  setCategory(id: string): void {
    this.activeCategory.set(id);
  }

  isActive(id: string): boolean {
    return this.activeCategory() === id;
  }

  formatPrice(value: number): string {
    return `$${value.toFixed(0)}`;
  }
}
