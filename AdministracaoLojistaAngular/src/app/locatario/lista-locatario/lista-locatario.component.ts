import { Component, OnInit } from '@angular/core';
import {LocatarioService} from '../../service/locatario.service';
import {Locatario} from '../../model/locatario';

@Component({
  selector: 'app-lista-locatario',
  templateUrl: './lista-locatario.component.html',
  styleUrls: ['./lista-locatario.component.css']
})
export class ListaLocatarioComponent implements OnInit {

  locatarios: Locatario[];
  locatario = {} as Locatario;

  constructor(private locatarioService: LocatarioService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void{
    this.locatarioService.getAll().subscribe((locatarios: Locatario[]) => {
      this.locatarios = locatarios;
    })
  }
}
