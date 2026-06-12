import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PapelPicadoComponent } from '../../shared/components/papel-picado/papel-picado.component';
import { GALLERY } from '../../shared/data/gallery';
import { LOCATIONS } from '../../shared/data/locations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, PapelPicadoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly highlights = GALLERY.slice(0, 3);
  readonly locationsCount = LOCATIONS.length;
}
