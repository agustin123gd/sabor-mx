import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PapelPicadoComponent } from '../../shared/components/papel-picado/papel-picado.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, PapelPicadoComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  readonly values = [
    {
      title: 'Ingredientes locales',
      text: 'Trabajamos con productores de Puebla, Oaxaca y el Estado de México para llevar a la mesa maíz, chiles y especias de la mejor calidad.'
    },
    {
      title: 'Recetas de familia',
      text: 'Cada platillo del menú nace de una receta transmitida de generación en generación dentro de nuestra familia.'
    },
    {
      title: 'Hecho a mano, todos los días',
      text: 'Tortillas, salsas y moles se preparan diariamente en cada sucursal, nunca el día anterior.'
    },
    {
      title: 'Calidez mexicana',
      text: 'Recibimos a cada persona como si llegara a comer a la casa de la familia: con atención, paciencia y una sonrisa.'
    }
  ];
}
