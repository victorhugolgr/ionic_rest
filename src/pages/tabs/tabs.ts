import { Component } from '@angular/core';


import { PrevisaoPage } from '../previsao/previsao';
import { NotasPage } from "../notas/notas";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = NotasPage;
  tab2Root: any = PrevisaoPage;

  constructor() {

  }
}
