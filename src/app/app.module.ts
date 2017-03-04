import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { NotasPage } from "../pages/notas/notas";
import { Webservice } from "../providers/webservice";
import { DetalhePage } from "../pages/detalhe/detalhe";
import { PrevisaoPage } from "../pages/previsao/previsao";

@NgModule({
  declarations: [
    MyApp,
    NotasPage,
    PrevisaoPage,
    TabsPage,
    DetalhePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NotasPage,
    PrevisaoPage,
    TabsPage,
    DetalhePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Webservice]
})
export class AppModule {}
