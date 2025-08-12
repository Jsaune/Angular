import { Component , input, output, ViewEncapsulation} from '@angular/core';
import { Productos } from '../productos';

@Component({
  selector: 'app-detalle-producto',
  imports: [],
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css',

})
export class DetalleProductoComponent {
  product = input<Productos>()
  agregar = output<Productos>();

  carrito(){
    this.agregar.emit(this.product()!);
  }
}
