import { Routes } from '@angular/router';

import { ArrocesComponent } from './components/arroces/arroces.component';
import { ArrozComponent } from './components/arroces/arroz/arroz.component';
import { CarnesComponent } from './components/carnes/carnes.component';
import { CarneComponent } from './components/carnes/carne/carne.component';
import { PostresComponent } from './components/postres/postres.component';
import { PostreComponent } from './components/postres/postre/postre.component';

export const routes: Routes = [
    { path: '', redirectTo: 'arroces', pathMatch: 'full' },
    { path: 'arroces', component: ArrocesComponent },
    { path: 'arroz/:id', component: ArrozComponent},
    { path: 'carnes', component: CarnesComponent},
    { path: 'carne/:id', component: CarneComponent},
    { path: 'postres', component: PostresComponent},
    { path: 'postre/:id', component: PostreComponent}
];
