import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})

export class FooterComponent {
  
  restaurantes = [
    {
      localidad: 'Valencia',
      direccion: 'C/ Valencia, 25',
      telefono: '+34 666 666 666'
    },
    {
      localidad: 'Alicante',
      direccion: 'C/ Alicante, 25',
      telefono: '+34 676 676 676'
    }
  ]

}
