import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PlatosService } from '../../services/platos.service';

@Component({
  selector: 'app-arroces',
  imports: [RouterLink, CommonModule],
  templateUrl: './arroces.component.html',
  styleUrl: './arroces.component.css'
})

export class ArrocesComponent {
  
  platos: any[] = [];

  constructor(private platosService: PlatosService) {}

  ngOnInit() {
    this.platos = this.platosService.getArroces();
  }
}

