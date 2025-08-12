import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaProductosComponent } from "./lista-productos/lista-productos.component";

@Component({
  selector: 'app-holi',
  imports: [
    RouterOutlet,
    ListaProductosComponent 
   ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title:string = 'Titulo';
}
