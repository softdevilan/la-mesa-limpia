import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PlatosService } from '../../../services/platos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carne',
  imports: [CommonModule, RouterLink],
  templateUrl: './carne.component.html',
  styleUrl: './carne.component.css'
})

export class CarneComponent {
  plato: any;

  constructor(private route: ActivatedRoute, private platosService: PlatosService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.plato = this.platosService.getPlatoById(id!, 'carnes');
  }
}
