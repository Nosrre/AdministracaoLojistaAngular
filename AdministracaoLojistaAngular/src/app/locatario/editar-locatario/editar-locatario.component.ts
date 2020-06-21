import { Component, OnInit } from '@angular/core';
import { LocatarioService } from '../../service/locatario.service';
import { Locatario } from '../../model/locatario';
import { Loja } from '../../model/loja';
import { LojaService } from '../../service/loja.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-editar-locatario',
  templateUrl: './editar-locatario.component.html',
  styleUrls: ['./editar-locatario.component.css']
})
export class EditarLocatarioComponent implements OnInit {

  locatario = {} as Locatario;
  lojas: Loja[];
  returnUrl = '/listarLocatario';

  constructor(private locatarioService: LocatarioService, private lojaService: LojaService, 
    private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.listAll();
    this.route.params.subscribe( parametro => {
      if (parametro['id']) {
        this.getById(parametro['id']);
      }
    });
  }

  getById(id: number) {
    this.locatarioService.getById(id).subscribe((locatario: Locatario) => {
      this.locatario = locatario;
    });
  }

  update(form: NgForm){
    this.locatarioService.update(this.locatario).subscribe(() => {
      this.cleanForm(form);
    });
    this.router.navigate([this.returnUrl]);
  }

  cleanForm(form: NgForm) {
    form.resetForm();
    this.locatario = {} as Locatario;
  }

  listAll(): void{
    this.lojaService.listAll().subscribe((lojas: Loja[]) => {
      this.lojas = lojas;
    });
  }

}
