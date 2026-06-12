import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PapelPicadoComponent } from '../../shared/components/papel-picado/papel-picado.component';
import { LOCATIONS, RestaurantLocation } from '../../shared/data/locations';

interface DisplayLocation extends RestaurantLocation {
  mapUrl: SafeResourceUrl;
}

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [PapelPicadoComponent],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css'
})
export class LocationsComponent {
  readonly locations: DisplayLocation[];

  constructor(private readonly sanitizer: DomSanitizer) {
    this.locations = LOCATIONS.map(loc => ({
      ...loc,
      mapUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.google.com/maps?q=${encodeURIComponent(loc.mapQuery)}&output=embed`
      )
    }));
  }
}
