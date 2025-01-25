import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PlatosService } from '../../services/platos.service';

@Component({
  selector: 'app-postres',
  imports: [RouterLink, CommonModule],
  templateUrl: './postres.component.html',
  styleUrl: './postres.component.css'
})

export class PostresComponent {

  platos: any[] = [];

  constructor(private platoService: PlatosService) {}

  ngOnInit() {
    this.platos = this.platoService.getPostres();
  }
}
