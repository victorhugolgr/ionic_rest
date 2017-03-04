import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NotaInterface } from "../../interfaces/notainterface";
import { Webservice } from "../../providers/webservice";

@Component({
  selector: 'page-notas',
  templateUrl: 'notas.html'
})
export class NotasPage {

  public abreForm: boolean = false;
  public tituloPagina: string = "Notas";
  public nota: NotaInterface = { Title: '', Body: '' };
  public listaNotas: NotaInterface[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public webservice: Webservice) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotasPage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    this.webservice.getNotas().then(data => this.listaNotas = data);
  }

  abreFormulario() {
    console.log('Abre Formulário');
    this.abreForm = !this.abreForm;

    if (this.abreForm) {
      this.tituloPagina = "Adicionar Nota";
    } else {
      this.tituloPagina = "Notas";
    }
  }

  adicionaNota() {
    console.log(this.nota);
    let nota = this.nota;
    this.nota = { Title: '', Body: '' };
    this.abreForm = false;
    this.webservice.addNota(nota).then(data => this.listaNotas.push(data));
  }

}
