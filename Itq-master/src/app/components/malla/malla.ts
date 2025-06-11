import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-malla',
  imports: [Navbar, Footer, CommonModule],

  templateUrl: './malla.html',
  styleUrl: './malla.css'
})
export class Malla {

}
