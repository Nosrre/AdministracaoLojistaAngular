import { Component, OnInit } from '@angular/core';
import { LocatarioService } from '../../service/locatario.service';
import { Locatario } from '../../model/locatario';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastrar-locatario',
  templateUrl: './cadastrar-locatario.component.html',
  styleUrls: ['./cadastrar-locatario.component.css']
})
export class CadastrarLocatarioComponent implements OnInit {

  locatario = {} as Locatario;

  constructor(private locatarioService: LocatarioService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( parametro => {
      if (parametro['id']) {
        this.getById(parametro['id']);
      }
    });
  }

  add(form: NgForm){
    this.locatarioService.add(this.locatario).subscribe(() => {
      this.cleanForm(form);
    });
  }

  getById(id: number) {
    this.locatarioService.getById(id).subscribe((locatario: Locatario) => {
      this.locatario = locatario;
    });
  }

  cleanForm(form: NgForm) {
    form.resetForm();
    this.locatario = {} as Locatario;
  }

}
