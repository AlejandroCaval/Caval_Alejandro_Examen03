import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-proyecto',
  imports: [Navbar, Footer],
  
  templateUrl: './proyecto.html',
  styleUrl: './proyecto.css'
})
export class Proyecto {

}
