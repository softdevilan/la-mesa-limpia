import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PlatosService } from '../../../services/platos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-arroz',
  imports: [CommonModule, RouterLink],
  templateUrl: './arroz.component.html',
  styleUrl: './arroz.component.css'
})

export class ArrozComponent {
  plato: any;

  constructor(private route: ActivatedRoute, private platosService: PlatosService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.plato = this.platosService.getPlatoById(id!, 'arroces');
  }
}
