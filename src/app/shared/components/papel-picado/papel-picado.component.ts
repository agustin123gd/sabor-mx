import { Component, Input } from '@angular/core';

/**
 * Divisor decorativo inspirado en el papel picado mexicano: una tira
 * recortada con patrones repetidos que separa secciones de la página.
 */
@Component({
  selector: 'app-papel-picado',
  standalone: true,
  template: `
    <div class="picado" [style.--picado-color]="color" [attr.aria-hidden]="true">
      <svg viewBox="0 0 240 28" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,0 H240 V28
          C 230,18 220,28 210,18 C 200,8 190,28 180,18
          C 170,8 160,28 150,18 C 140,8 130,28 120,18
          C 110,8 100,28 90,18 C 80,8 70,28 60,18
          C 50,8 40,28 30,18 C 20,8 10,28 0,18 Z" />
        <circle cx="20" cy="10" r="2.4" class="cut" />
        <circle cx="60" cy="10" r="2.4" class="cut" />
        <circle cx="100" cy="10" r="2.4" class="cut" />
        <circle cx="140" cy="10" r="2.4" class="cut" />
        <circle cx="180" cy="10" r="2.4" class="cut" />
        <circle cx="220" cy="10" r="2.4" class="cut" />
        <path d="M35,4 l4,4 l-4,4 l-4,-4 Z" class="cut"/>
        <path d="M75,4 l4,4 l-4,4 l-4,-4 Z" class="cut"/>
        <path d="M115,4 l4,4 l-4,4 l-4,-4 Z" class="cut"/>
        <path d="M155,4 l4,4 l-4,4 l-4,-4 Z" class="cut"/>
        <path d="M195,4 l4,4 l-4,4 l-4,-4 Z" class="cut"/>
        <path d="M235,4 l4,4 l-4,-4 Z" class="cut"/>
      </svg>
    </div>
  `,
  styles: [`
    .picado {
      width: 100%;
      line-height: 0;
      color: var(--picado-color, var(--color-marigold));
    }
    .picado svg {
      width: 100%;
      height: 28px;
      display: block;
    }
    .picado path:not(.cut) {
      fill: currentColor;
    }
    .picado .cut {
      fill: var(--color-bg);
    }
  `]
})
export class PapelPicadoComponent {
  /** Color CSS del listón de papel (acepta variables CSS o valores hex). */
  @Input() color = 'var(--color-marigold)';
}
