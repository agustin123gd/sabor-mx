# El Nopal Dorado — Sitio Web (Angular)

Sitio web para restaurante de comida mexicana con:

- **Inicio**: hero, vista previa de galería, misión/visión y CTA al menú.
- **Galería** (`/galeria`): fotos del restaurante y los platillos.
- **Ubicaciones** (`/ubicaciones`): 3 sucursales con mapa embebido de Google Maps.
- **Nosotros** (`/nosotros`): misión, visión y valores.
- **Menú digital** (`/menu`): menú por categorías + código QR (apunta a esta
  misma página) + botón para descargar el menú en PDF (`src/assets/menu.pdf`).

## Cómo correrlo

```bash
npm install
npm start
```

Abre http://localhost:4200

## Personalizar

- **Datos de ejemplo**: `src/app/shared/data/` (locations.ts, menu.ts, gallery.ts).
- **Colores y tipografías**: variables CSS en `src/styles.css` (`:root`).
- **PDF del menú**: reemplaza `src/assets/menu.pdf` con tu propio archivo
  (mismo nombre) o regenera con `python3 gen_menu_pdf.py`.
- **Código QR**: se genera automáticamente apuntando a `/menu` usando la API
  pública de qrserver.com. Para producción, imprime ese QR ya con el dominio
  real una vez publicado el sitio.
