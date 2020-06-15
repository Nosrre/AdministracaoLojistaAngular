import { Component, OnInit } from '@angular/core';
import { LocatarioService } from '../../service/locatario.service';
import { Locatario } from '../../model/locatario';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-locatario',
  templateUrl: './cadastrar-locatario.component.html',
  styleUrls: ['./cadastrar-locatario.component.css']
})
export class CadastrarLocatarioComponent implements OnInit {

  locatario = {} as Locatario;

  constructor(private locatarioService: LocatarioService) { }

  ngOnInit(): void {
  }

  add(form: NgForm){
    debugger;
    this.locatarioService.add(this.locatario).subscribe(() => {
      this.cleanForm(form);
    });console.log(form.errors);
  }

  cleanForm(form: NgForm) {
    form.resetForm();
    this.locatario = {} as Locatario;
  }

}
