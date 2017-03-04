import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { NotaInterface } from "../interfaces/notainterface";

/*
  Generated class for the Webservice provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Webservice {

  private url:string = 'http://devmedianotesapi.azurewebsites.net/';
  private headers = new Headers({'Accept':'application/json'});

  constructor(public http: Http) {
    console.log('Hello Webservice Provider');
  }

  addNota(nota: NotaInterface){
    return this.http.post(this.url + 'api/notes', nota, {headers:this.headers})
      .toPromise()
      .then(res => res.json());
  }

  getNotas(){
    return this.http.get(this.url + 'api/notes')
      .toPromise()
      .then(res => res.json());
  }
}
