import { Component } from '@angular/core';
import { Productos } from '../productos';
import { DetalleProductoComponent } from '../detalle-producto/detalle-producto.component';

@Component({
  selector: 'app-lista-productos',
  imports: [DetalleProductoComponent],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {
  productos:Productos[] =[
    {id:1, nombre:"Coca cola", precio:25.5, categoria:"gaseosa", detalle:"Esta cocaola se vende en todas las ciuaddes del peru "},
    {id:2, nombre:"Inka cola" , categoria:"gaseosa"},
    {id:3, nombre:"Choco soda", precio:25.5, categoria: 'galleta'},
    {id:4, nombre:"morochas", categoria:'galleta'},
    {id:5, nombre:"Sublime", precio:25.5, categoria:'chocolate'},

  ];

  seleccionarProducto:Productos|undefined;

  onAdded(product : Productos){
    alert(`${product.nombre} Agregado al carrito`)
    alert(`El precio es ${product.precio} `)
  }

}
