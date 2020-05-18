import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-loja',
  templateUrl: './cadastrar-loja.component.html',
  styleUrls: ['./cadastrar-loja.component.css']
})
export class CadastrarLojaComponent implements OnInit {
  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
