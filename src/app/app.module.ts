import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';
//Componentes de Angular-maps
import { AgmCoreModule } from '@agm/core';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';




@NgModule({
  entryComponents:[
    MapaEditarComponent
  ],
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
<<<<<<< HEAD
//Api key de googlemaps
      apiKey: 'AIzaSyBz6UoCM5zb2sI6k1LapytmQBcEwB2rx5s'
=======
      apiKey: 'INGRESE_KEY'
>>>>>>> 55a0ca3f6f91febe8a46e1bbb748eedab936e004
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
