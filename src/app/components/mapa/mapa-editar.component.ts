import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {

  forma:FormGroup;
//carga un formulario e inyecta la data de tipo any
  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<MapaEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

      console.log(data);
      this.forma = fb.group({
        'titulo':data.titulo,
        'desc':data.desc
      });
    }

  ngOnInit() {
  }
//Guarda cambios realizados de la información de los marcadores
  guardarCambios(){
    this.dialogRef.close(this.forma.value);
  }
//Desactiva la visualización del cuadro de dialogo
  onNoClick(): void {
    this.dialogRef.close();
  }

}
