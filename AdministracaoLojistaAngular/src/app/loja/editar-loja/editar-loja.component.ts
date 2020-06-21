import { Component, OnInit } from '@angular/core';
import { LojaService } from '../../service/loja.service';
import { Loja } from '../../model/loja';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-editar-loja',
  templateUrl: './editar-loja.component.html',
  styleUrls: ['./editar-loja.component.css']
})
export class EditarLojaComponent implements OnInit {

  loja = {} as Loja;
  returnUrl = '/listarLoja'

  constructor(private lojaService: LojaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe( parametro => {
      if (parametro['id']) {
        this.getById(parametro['id']);
      }
    });
  }

  getById(id: number) {
    this.lojaService.getById(id).subscribe((loja: Loja) => {
      this.loja = loja;
    });
  }

  update(form: NgForm){
    this.lojaService.update(this.loja).subscribe(() => {
      this.cleanForm(form);
    });
    this.router.navigate([this.returnUrl]);
  }

  cleanForm(form: NgForm) {
    form.resetForm();
    this.loja = {} as Loja;
  }
}
