import { Component, OnInit } from '@angular/core';
import { LojaService } from '../../service/loja.service';
import { Loja } from '../../model/loja';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-cadastrar-loja',
  templateUrl: './cadastrar-loja.component.html',
  styleUrls: ['./cadastrar-loja.component.css']
})
export class CadastrarLojaComponent implements OnInit {
  
  loja = {} as Loja;
  returnUrl = '/listarLoja';

  constructor(private lojaService: LojaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  add(form: NgForm){
    this.lojaService.add(this.loja).subscribe(() => {
      this.cleanForm(form);
    });
    this.router.navigate([this.returnUrl]);
  }

  cleanForm(form: NgForm) {
    form.resetForm();
    this.loja = {} as Loja;
  }

}
