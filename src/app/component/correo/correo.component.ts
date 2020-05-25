import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {

  correo: any;

  constructor() {
    this.correo = {
      titulo: "Titulo del Email",
      cuerpo: `Cuerpo del Email, prueba para ver que esto funciona.
      Vamos a ver como se muestra.`,
      emisor: 'correoNJF@gmail.com',
      destinatario : 'destinatario@gmail.com'
    };
  }

  ngOnInit(): void {
  }

}
