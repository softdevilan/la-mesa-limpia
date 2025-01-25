import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PlatosService } from '../../services/platos.service';

@Component({
  selector: 'app-carnes',
  imports: [RouterLink, CommonModule],
  templateUrl: './carnes.component.html',
  styleUrl: './carnes.component.css'
})

export class CarnesComponent {
  
  platos: any[] = [];
  
    constructor(private platoService: PlatosService) {}
  
    ngOnInit() {
      this.platos = this.platoService.getCarnes();
  }
}
