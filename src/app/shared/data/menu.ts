export interface MenuItem {
  name: string;
  description: string;
  price: number;
  tag?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
}

export const MENU: MenuCategory[] = [
  {
    id: 'entradas',
    title: 'Para Empezar',
    subtitle: 'Botanas y antojitos de la casa',
    items: [
      { name: 'Guacamole tradicional', description: 'Aguacate martajado, cilantro, cebolla, chile serrano y totopos de maíz azul.', price: 95, tag: 'Vegetariano' },
      { name: 'Esquites con costra de queso', description: 'Granos de elote en salsa de chile de árbol, mayonesa, queso cotija y epazote.', price: 75, tag: 'Vegetariano' },
      { name: 'Sopa de tortilla', description: 'Caldo de jitomate asado, tiras de tortilla frita, aguacate, crema y queso panela.', price: 85 },
      { name: 'Queso fundido con chorizo', description: 'Queso Oaxaca gratinado con chorizo casero, servido con tortillas de harina.', price: 110 }
    ]
  },
  {
    id: 'tacos',
    title: 'Tacos & Antojitos',
    subtitle: 'Hechos al momento, en tortilla de maíz nixtamalizado',
    items: [
      { name: 'Tacos al pastor', description: 'Trompo de cerdo adobado, piña asada, cebolla y cilantro. Orden de 3.', price: 110 },
      { name: 'Tacos de cochinita pibil', description: 'Cerdo marinado en achiote y naranja agria, cebolla morada encurtida. Orden de 3.', price: 120 },
      { name: 'Tacos de canasta de papa con chorizo', description: 'Tortilla suave bañada en aceite de achiote. Orden de 4.', price: 90 },
      { name: 'Quesabirria', description: 'Tacos de birria de res con consomé para remojar y queso derretido. Orden de 3.', price: 145, tag: 'Favorito' }
    ]
  },
  {
    id: 'fuertes',
    title: 'Platos Fuertes',
    subtitle: 'Para compartir o disfrutar a fondo',
    items: [
      { name: 'Mole poblano con pollo', description: 'Mole de más de 20 ingredientes, arroz rojo y tortillas hechas a mano.', price: 195, tag: 'Receta de la abuela' },
      { name: 'Enchiladas verdes', description: 'Tortilla rellena de pollo deshebrado, salsa de tomate verde, crema y queso.', price: 160 },
      { name: 'Chiles en nogada', description: 'Chile poblano relleno de picadillo, bañado en nogada y granada (temporada agosto–sept).', price: 220, tag: 'Temporada' },
      { name: 'Pescado a la talla', description: 'Filete de pescado del día en adobo de chiles, servido con arroz y ensalada.', price: 235 }
    ]
  },
  {
    id: 'postres',
    title: 'Postres',
    subtitle: 'El final dulce',
    items: [
      { name: 'Flan napolitano', description: 'Flan cremoso bañado en caramelo, con un toque de canela.', price: 65 },
      { name: 'Pastel de elote', description: 'Pastel húmedo de elote tierno con crema y cajeta.', price: 70 },
      { name: 'Churros con chocolate', description: 'Churros espolvoreados con azúcar y canela, salsa de chocolate caliente.', price: 75 }
    ]
  },
  {
    id: 'bebidas',
    title: 'Bebidas',
    subtitle: 'Frías, calientes y con espíritu',
    items: [
      { name: 'Agua fresca del día', description: 'Jamaica, horchata o tamarindo.', price: 45 },
      { name: 'Margarita clásica', description: 'Tequila blanco, triple sec, limón y sal de gusano.', price: 130, tag: 'Bar' },
      { name: 'Mezcal artesanal', description: 'Selección de mezcales de Oaxaca, servido con rodajas de naranja y sal de gusano.', price: 150, tag: 'Bar' },
      { name: 'Café de olla', description: 'Café de grano molido, piloncillo y canela.', price: 50 }
    ]
  }
];
