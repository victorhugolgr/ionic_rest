import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Notas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-notas',
  templateUrl: 'notas.html'
})
export class NotasPage {

  public abreForm: boolean = false;
  public tituloPagina:string = "Notas";

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

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

}
