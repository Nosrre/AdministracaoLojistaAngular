import { Component, OnInit } from '@angular/core';
import { LocatarioService } from '../../service/locatario.service';
import { Locatario } from '../../model/locatario';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-locatario',
  templateUrl: './editar-locatario.component.html',
  styleUrls: ['./editar-locatario.component.css']
})
export class EditarLocatarioComponent implements OnInit {

  locatario = {} as Locatario;

  constructor(private locatarioService: LocatarioService, private route: ActivatedRoute) { }

  ngOnInit(): void {
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
  }

  cleanForm(form: NgForm) {
    form.resetForm();
    this.locatario = {} as Locatario;
  }

}
