import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Webservice } from "../../providers/webservice";
import { NotaInterface } from "../../interfaces/notainterface";
import { NotasPage } from "../notas/notas";

/*
  Generated class for the Previsao page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-previsao',
  templateUrl: 'previsao.html'
})
export class PrevisaoPage {

  public cidade: string = 'marituba';
  public notaPrevisao: NotaInterface = { Title: '', Body: '' };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public webService: Webservice) { }

  ionViewDidLoad() {
    this.buscaPrevisao();
  }

  buscaPrevisao() {
    this.webService.getPrevisao(this.cidade).then(data => {
      console.log(data);
      this.cidade = '';
      this.notaPrevisao.Title = 'Previsão em ' + data.name;
      this.notaPrevisao.Body = 'Temperatura em ' + data.main.temp + ' e ' + data.weather[0].description + '. Em ' + this.getData();
    });
  }

  getData() {
    let data: any = new Date();
    let dd: any = data.getDate();
    let mm: any = data.getMonth() + 1;
    let yyyy: any = data.getFullYear();
    let h: any = data.getHours();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    return dd + '/' + mm + '/' + yyyy + ' - ' + h + 'h';
  }

  salvaNota(){
    this.navCtrl.push(NotasPage,{nota:this.notaPrevisao});
  }

}
