import { Component, OnInit } from '@angular/core';
import {LocatarioService} from '../../service/locatario.service';
import {Locatario} from '../../model/locatario';

@Component({
  selector: 'app-lista-locatario',
  templateUrl: './lista-locatario.component.html',
  styleUrls: ['./lista-locatario.component.css']
})
export class ListaLocatarioComponent implements OnInit {
  displayedColumns = ['id', 'name','documento','contato','endereco','inadimplente', 'loja', 'action'];

  locatarios: Locatario[];
  locatario = {} as Locatario;

  constructor(private locatarioService: LocatarioService) { }

  ngOnInit(): void {
    this.listAll();
  }

  listAll(): void{
    this.locatarioService.listAll().subscribe((locatarios: Locatario[]) => {
      this.locatarios = locatarios;

      locatarios.forEach(element => {
        if(element.inadimplente){
          element.inadimplenteString = "Sim"
        } else{
          element.inadimplenteString = "Não"
        }
      });
    });
  }

  delete(locatario: Locatario) {
    this.locatarioService.delete(locatario).subscribe(() => {
      this.listAll();
    });
  }

}
