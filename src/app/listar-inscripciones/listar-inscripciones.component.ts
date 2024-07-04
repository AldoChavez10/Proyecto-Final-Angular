import { Component, inject, OnInit } from '@angular/core';
import { ServiceListarInscripcionesService } from '../services/service-listar-inscripciones.service';
import { PdfGeneratorService } from '../services/pdf-generator.service';

@Component({
  selector: 'app-listar-inscripciones',
  standalone: true,
  imports: [],
  templateUrl: './listar-inscripciones.component.html',
  styleUrls: ['./listar-inscripciones.component.css'] 
})
export class ListarInscripcionesComponent implements OnInit {
  private inscripcionService = inject(ServiceListarInscripcionesService);
  private pdfGeneratorService = inject(PdfGeneratorService);
  inscripciones: any[] = [];

  ngOnInit(): void {
    this.inscripcionService.listarinscripciones().subscribe((inscripciones: any) => {
      this.inscripciones = inscripciones;
    });
  }

  public saveAsPDF(): void {
    this.pdfGeneratorService.generatePDF('inscriptions-table', 'Inscripciones');
  }
}
