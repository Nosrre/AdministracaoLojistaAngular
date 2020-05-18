import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-loja',
  templateUrl: './listar-loja.component.html',
  styleUrls: ['./listar-loja.component.css']
})
export class ListarLojaComponent implements OnInit {

  displayedColumns = ['id', 'name', 'price', 'action']
  constructor() { }

  ngOnInit(): void {
  }

}
