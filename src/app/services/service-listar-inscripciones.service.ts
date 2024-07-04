import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceListarInscripcionesService {
 private http = inject (HttpClient)

  listarinscripciones() {
    return this.http.get('http://localhost:8090/api/inscripciones')
   }
}
