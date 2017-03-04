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
  public tituloPagina:string = "Notas";
  public nota: NotaInterface = {Title: '', Body:''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public webservice:Webservice) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotasPage');
  }

  abreFormulario() {
    console.log('Abre Formulário');
    this.abreForm = !this.abreForm;

    if(this.abreForm){
      this.tituloPagina = "Adicionar Nota";
    }else{
      this.tituloPagina = "Notas";
    }
  }

  adicionaNota(){
    console.log(this.nota);
    this.webservice.addNota(this.nota).then(data => console.log(data));
  }

}
