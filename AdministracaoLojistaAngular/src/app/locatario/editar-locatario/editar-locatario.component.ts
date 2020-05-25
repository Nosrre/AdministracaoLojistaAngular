import { Component, OnInit } from '@angular/core';
import {LocatarioService} from '../../service/locatario.service';
import {Locatario} from '../../model/locatario';

@Component({
  selector: 'app-editar-locatario',
  templateUrl: './editar-locatario.component.html',
  styleUrls: ['./editar-locatario.component.css']
})
export class EditarLocatarioComponent implements OnInit {

  locatario: Locatario;

  constructor(private locatarioService: LocatarioService) { }

  ngOnInit(): void {
  }

  update(): void{
  }

}
