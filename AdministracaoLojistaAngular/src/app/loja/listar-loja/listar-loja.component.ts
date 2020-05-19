import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-loja',
  templateUrl: './listar-loja.component.html',
  styleUrls: ['./listar-loja.component.css']
})
export class ListarLojaComponent implements OnInit {

  displayedColumns = ['id', 'loja','aluguel','tamanho','setor','locatario','categoria','situacao',  'action']
  constructor() { }

  ngOnInit(): void {
  }

}
