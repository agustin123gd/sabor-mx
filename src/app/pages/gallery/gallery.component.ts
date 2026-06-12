import { Component } from '@angular/core';
import { PapelPicadoComponent } from '../../shared/components/papel-picado/papel-picado.component';
import { GALLERY } from '../../shared/data/gallery';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [PapelPicadoComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  readonly photos = GALLERY;
}
