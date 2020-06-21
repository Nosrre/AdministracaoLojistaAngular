import { Component, OnInit } from '@angular/core';
import { LocatarioService } from '../../service/locatario.service';
import { LojaService } from '../../service/loja.service';
import { Locatario } from '../../model/locatario';
import { Loja } from '../../model/loja';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-cadastrar-locatario',
  templateUrl: './cadastrar-locatario.component.html',
  styleUrls: ['./cadastrar-locatario.component.css']
})
export class CadastrarLocatarioComponent implements OnInit {

  locatario = {} as Locatario;
  lojas: Loja[];
  lojasFilter: Loja[];
  returnUrl: string;

  constructor(private locatarioService: LocatarioService, private lojaService: LojaService, 
    private route: ActivatedRoute, private router: Router,) { }

  ngOnInit(): void {
    this.listAll();
    this.returnUrl = "/listarLocatario";
  }

  add(form: NgForm){
    this.locatarioService.add(this.locatario).subscribe(() => {
      this.cleanForm(form);
    });
    this.router.navigate([this.returnUrl]);
  }

  cleanForm(form: NgForm) {
    form.resetForm();
    this.locatario = {} as Locatario;
  }

  listAll(): void{
    this.lojaService.listLojaDisponivel().subscribe((lojas: Loja[]) => {
      this.lojas = lojas;
    });
  }

}
