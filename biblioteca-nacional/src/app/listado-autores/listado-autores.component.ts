import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AutoresService } from '../services/autores.service';


@Component({
  selector: 'app-listado-autores',
  templateUrl: './listado-autores.component.html',
  styleUrls: ['./listado-autores.component.css']
})
export class ListadoAutoresComponent implements OnInit {

  displayedColumns: string[] = ['nombre_de_persona', 'fecha_de_nacimiento', 'fecha_de_fallecimiento', 'lugar_de_nacimiento', 'lugar_de_fallecimiento', "obras_relacionadas"];
  listadoAutores = new MatTableDataSource();

  constructor(private autoresService: AutoresService) { }

  ngOnInit(): void {
    this.autoresService.getAutoresList().subscribe(resp => {
      this.listadoAutores.data = resp.results;
    });
  }

}
