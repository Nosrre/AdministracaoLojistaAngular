import { Component, OnInit } from '@angular/core';
import {LojaService} from '../../service/loja.service';
import {Loja} from '../../model/loja';

@Component({
  selector: 'app-listar-loja',
  templateUrl: './listar-loja.component.html',
  styleUrls: ['./listar-loja.component.css']
})
export class ListarLojaComponent implements OnInit {

  displayedColumns = ['id', 'loja','aluguel','tamanho','setor','locatario','categoria','situacao', 'action']
 
  lojas: Loja[];
  loja = {} as Loja;

  constructor(private lojaService: LojaService) { }

  ngOnInit(): void {
    this.listAll();
  }

  listAll(): void{
    this.lojaService.listAll().subscribe((lojas: Loja[]) => {
      this.lojas = lojas;
    });
  }

  delete(loja: Loja) {
    this.lojaService.delete(loja).subscribe(() => {
      this.listAll();
    });
  }
  
  getAllBySituacao(){

  }

  getAllByCategoria(){

  }

  getAllByAluguel(){

  }

}
