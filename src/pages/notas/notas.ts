import { Component } from '@angular/core';
import { NavController, NavParams, ItemSliding } from 'ionic-angular';

import { NotaInterface } from "../../interfaces/notainterface";
import { Webservice } from "../../providers/webservice";
import { DetalhePage } from "../detalhe/detalhe";

@Component({
  selector: 'page-notas',
  templateUrl: 'notas.html'
})
export class NotasPage {

  public abreForm: boolean = false;
  public tituloPagina: string = "Notas";
  public nota: NotaInterface = { Title: '', Body: '' };
  public listaNotas: NotaInterface[];
  public editando: boolean = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public webservice: Webservice) { }

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
    this.nota = { Title: '', Body: '' };
    this.editando = false;

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

  abreDetalhe(nota: NotaInterface) {
    this.navCtrl.push(DetalhePage, { nota: nota });
  }

  abreEditarNota(nota: NotaInterface, listaOpcoes: ItemSliding) {
    this.editando = true;
    listaOpcoes.close();
    this.abreForm = true;
    this.tituloPagina = "Editar Nota";
    this.nota = nota;
  }

  editarNota() {
    this.webservice.editNota(this.nota).then(data => this.atualizaNota(this.nota));
  }

  atualizaNota(nota: NotaInterface) {
    this.abreForm = false;
    for (let k in this.listaNotas) {
      if(this.listaNotas[k].Id == nota.Id){
        this.listaNotas[k] = nota;
      }
    }
  }
}
