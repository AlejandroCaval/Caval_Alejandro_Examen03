import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-docente',
  imports: [Navbar, Footer],
  
  templateUrl: './docente.html',
  styleUrl: './docente.css'
})
export class Docente {

}
