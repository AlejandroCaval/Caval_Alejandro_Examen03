import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Form } from './components/form/form';
import { Carrousel } from './components/carrousel/carrousel';
import { Docente } from './components/docente/docente';
import { Malla } from './components/malla/malla';
import { Proyecto } from './components/proyecto/proyecto';
import { Autoridades } from './components/autoridades/autoridades';


export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: Home},
    {path: 'Form/:id',
    loadComponent: () => import('./components/form/form') .then(m => m.Form)     },
    {path: 'navbar', component: Navbar},
    {path: 'footer', component: Footer},
    {path: 'carrousel', component: Carrousel},
    {path: 'docente', component: Docente},
    {path: 'malla', component: Malla},
    {path: 'proyecto', component: Proyecto},
    {path: 'autoridades', component: Autoridades}
    
];
