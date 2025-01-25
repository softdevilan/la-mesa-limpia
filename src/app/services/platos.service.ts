import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatosService {

  constructor() { }

  // Platos
  arroces = [
    {
        id: 'ARR01',
        nombre: 'Arroz del senyoret',
        foto: 'arroz_senyoret',
        descripcion: 'Arroz mediterráneo con mariscos pelados para mayor comodidad.',
        alergenos: ['Pescado', 'Crustaceos'],
        precio: 12.50  
    },
    {
      id: 'ARR02',
      nombre: 'Paella Valenciana',
      foto: 'paella_valenciana',
      descripcion: 'Auténtica receta de paella con pollo, conejo y verduras frescas.',
      alergenos: ['Apio'],
      precio: 12.00
    },
    {
      id: 'ARR03',
      nombre: 'Arroz Negro',
      foto: 'arroz_negro',
      descripcion: 'Delicioso arroz con tinta de calamar y alioli.',
      alergenos: ['Crustaceos', 'Pescado', 'Huevo'],
      precio: 13.50
    },
    {
      id: 'ARR04',
      nombre: 'Paella de Secreto',
      foto: 'paella_secreto',
      descripcion: 'Paella de Secreto Ibérico, Alcachofas y Boletus.',
      alergenos: ['Crustaceos', 'Pescado'],
      precio: 18.00
    },
    {
      id: 'ARR05',
      nombre: 'Arroz con Verduras',
      foto: 'paella_verduras',
      descripcion: 'Arroz vegetariano con verduras de temporada.',
      alergenos: ['Apio'],
      precio: 9.00
    },
    {
      id: 'ARR06',
      nombre: 'Arroz con Setas',
      foto: 'arroz_setas',
      descripcion: 'Paella con Pollo deshuesado junto a un cóctel de setas variadas seleccionadas por nuestros cocineros. Despertará tus cinco sentidos.',
      alergenos: ['Frutos-secos', 'Lacteos'],
      precio: 10.50
    }
  ];

  carnes = [
    {
      id: 'CAR01',
      nombre: 'Lomo bajo de Vacuno',
      foto: 'lomo_vacuno',
      descripcion: 'Jugoso entrecot de vaca de la finca de Jiménez Barbero a la brasa, acompañado de pimientos de padrón y nuestras patatas.',
      carne: ['Vacuno'],
      precio: 20.50
    },
    {
      id: 'CAR02',
      nombre: 'Abanico Ibérico',
      foto: 'abanico_iberico',
      descripcion: 'Sabroso abanico de cerdo ibérico marinado durante 12 horas en salsa tandoori, acompañado de nuestras patatas.',
      carne: ['Cerdo'],
      precio: 15.00
    },
    {
      id: 'CAR03',
      nombre: 'Hamburguesa de Vacuno',
      foto: 'hamburguesa_vacuno',
      descripcion: 'Hamburguesa de 250 gramos a la parrilla sin pan, con tomates cherry rama horneados y patatas asadas.',
      carne: ['Vacuno'],
      precio: 13.50
    },
    {
      id: 'CAR04',
      nombre: 'Pechuga de Pollo de Corral',
      foto: 'pechuga_corral',
      descripcion: 'Jugosa pechuga de pollo de corral marinada durante 24 horas, cocinada en nuestro horno de carbón, bañada en mojo verde y acompañada de patatas asadas y tomates cherry rama confitados.',
      carne: ['Pollo'],
      precio: 10.00
    },
    {
      id: 'CAR05',
      nombre: 'Gran Costillar Barbacoa',
      foto: 'costillar_barbacoa',
      descripcion: 'Delicioso costillar de cerdo a la parrilla de carbón laqueado con nuestra salsa barbacoa, acompañado de nuestras patatas.',
      carne: ['Cerdo'],
      precio: 19.00
    },
    {
      id: 'CAR06',
      nombre: 'Solomillo de Vacuno',
      foto: 'solomillo_vacuno',
      descripcion: 'Tierno solomillo de anojo de la finca de Jiménez Barbero, acompañado de pimientos de padrón y nuestras patatas.',
      carne: ['Vacuno'],
      precio: 15.50
    }
  ];

  postres = [
    {
      id: 'POS01',
      nombre: 'Muerte por chocolate',
      foto: 'muerte_chocolate',
      descripcion: 'Tarta 100% sin gluten con 3 capas de bizcocho montadas en crema chocolate y trufa y cubierta con virutas bizcocho de chocolate. Una gran intensidad de chocolate con un bizcocho emborrachado de almíbar de canela y naranja.  Si te van las emociones fuertes no podrás resistir la seducción de esta elegante tarta.',
      alergenos: ['Huevo', 'Lacteos'],
      precio: 5.20
    },
    {
      id: 'POS02',
      nombre: 'Tarta de Oreo',
      foto: 'tarta_oreo',
      descripcion: 'Esta elegante tarta sin gluten te sorprenderá por su combinación de chocolates con nata y galletas. Lleva 3 capas de bizcocho genovés sin gluten aderezado con almíbar de canela y un toque de naranja que ayuda a potenciar el sabor del chocolate. La obra de arte va terminada con migas de galleta de chocolate con nata.',
      alergenos: ['Huevo'],
      precio: 5.20
    },
    {
      id: 'POS03',
      nombre: 'Tarta Red Velvet',
      foto: 'red_velvet',
      descripcion: '¿Cómo resistirsé a degustar nuestra increible red velvet?. La tarta sin gluten que es puro terciopelo rojo. No hay más que decir.',
      alergenos: ['Huevo', 'Lacteos'],
      precio: 5.20
    },
    {
      id: 'POS04',
      nombre: 'Strudel de Manzana',
      foto: 'strudel_manzana',
      descripcion: 'El sabor crujiente de las almendras, la suavidad y ese ligero toque ácido de las manzanas. Que disfrutes este estupendo strudel de manzana libre de gluten.',
      alergenos: ['Huevo', 'Frutos-secos'],
      precio: 6.30
    },
    {
      id: 'POS05',
      nombre: 'Tarta de Queso',
      foto: 'tarta_queso',
      descripcion: 'La popular e inigualable tarta de queso versión Sana Locura y sin gluten. Elaborada cada mañana en nuestro obrador con ingredientes naturales y de forma artesana. Disfruta de su textura cremosa por dentro y tostada por fuera.',
      alergenos: ['Huevo', 'Lacteos'],
      precio: 16.00
    },
    {
      id: 'POS06',
      nombre: 'Tarta de Zanahoria',
      foto: 'tarta_zanahoria',
      descripcion: 'Una textura densa y suave identifica a nuestra carrot cake sin gluten. Jugoso bizcocho de zanahoria  y queso crema sin lactosa con un punto dulce. Decorada con crujiente y frutos silvestres.',
      alergenos: ['Huevo', 'Lacteos'],
      precio: 5.20
    }
  ];

  // Getters
  getArroces() {
    return this.arroces;
  }

  getCarnes() {
    return this.carnes;
  }

  getPostres() {
    return this.postres;
  }

  getPlatoById(id: string, categoria: string) {
    if(categoria === 'arroces') return this.arroces.find((plato) => plato.id === id);
    else if(categoria === 'carnes') return this.carnes.find((plato) => plato.id === id);
    else if(categoria === 'postres') return this.postres.find((plato) => plato.id === id);
    else return;
  }

}
