import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-locatario',
  templateUrl: './lista-locatario.component.html',
  styleUrls: ['./lista-locatario.component.css']
})
export class ListaLocatarioComponent implements OnInit {
  displayedColumns = ['id', 'name','documento','contato','endereco','contrato', 'action']
  
  constructor() { } 
  

  ngOnInit(): void {
  }

}
