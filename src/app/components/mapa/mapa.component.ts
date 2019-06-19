import { Component, OnInit } from '@angular/core';
//Se importa la clase marcador.
import { Marcador } from '../../classes/marcador.class';

import {MatSnackBar} from '@angular/material';
import {MatDialog, MatDialogRef} from '@angular/material';

import {MapaEditarComponent} from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  //Se agrega una ubicación estatica para mostrar en el mapa
  marcadores: Marcador[] = [];
  lat = 51.678418;
  lng = 7.809007;

  constructor(public snackBar: MatSnackBar,public dialog: MatDialog) {

    //Se cargan los elementos almacenados en el LocalStorage
    if (localStorage.getItem('marcadores')) {
        this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }

  }

  ngOnInit() {
  }
//Función para agregar marcadores, se activa al momento de hacer click en el mapa.
//Esta función hace uso de la función guardar.
  agregarMarcador(evento){
    const coords: {lat:number, lng:number} = evento.coords;

    const nuevoMarcador = new Marcador(coords.lat, coords.lng);

    this.marcadores.push(nuevoMarcador);

    this.guardarStorage();
    this.snackBar.open('Marcador Agregado', 'Cerrar', {duration: 3000});
  }
//Función de eliminar el marcador del LocalStorage, esta anclada al boton eliminar de cada marcador.
  borrarMarcador(i:number){

    this.marcadores.splice(i, 1);
    this.guardarStorage();
    this.snackBar.open('Marcador Eliminado', 'Cerrar' ,{duration: 3000});
  }
//Función de Editar el marcador del LocalStorage, esta anclada al boton de editar de cada marcador.
  editarMarcador(marcador:Marcador){
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: {titulo: marcador.titulo, desc:marcador.desc}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      if (!result) {
          return;
      }
      marcador.titulo = result.titulo;
      marcador.desc = result.desc;

      this.guardarStorage();
      this.snackBar.open('Marcador Actualizado', 'Cerrar' ,{duration: 3000});

    });
  }
//Guarda el marcador creado en el LocalStorage
  guardarStorage(){
    localStorage.setItem('marcadores',JSON.stringify(this.marcadores));
  }



}
