export interface RestaurantLocation {
  id: string;
  name: string;
  address: string;
  neighborhood: string;
  phone: string;
  hours: string;
  mapQuery: string;
}

export const LOCATIONS: RestaurantLocation[] = [
  {
    id: 'centro',
    name: 'El Nopal Dorado · Centro Histórico',
    address: 'Calle República de Uruguay 78, Centro, CDMX',
    neighborhood: 'Centro Histórico',
    phone: '+52 55 5512 3344',
    hours: 'Lun a Dom · 9:00 – 22:00',
    mapQuery: 'Republica de Uruguay 78, Centro Historico, Ciudad de Mexico'
  },
  {
    id: 'condesa',
    name: 'El Nopal Dorado · Condesa',
    address: 'Av. Michoacán 45, Condesa, CDMX',
    neighborhood: 'Condesa',
    phone: '+52 55 5544 7788',
    hours: 'Lun a Dom · 10:00 – 23:00',
    mapQuery: 'Avenida Michoacan 45, Condesa, Ciudad de Mexico'
  },
  {
    id: 'polanco',
    name: 'El Nopal Dorado · Polanco',
    address: 'Av. Presidente Masaryk 210, Polanco, CDMX',
    neighborhood: 'Polanco',
    phone: '+52 55 5566 9900',
    hours: 'Lun a Sáb · 12:00 – 23:30 · Dom 12:00 – 18:00',
    mapQuery: 'Avenida Presidente Masaryk 210, Polanco, Ciudad de Mexico'
  }
];
