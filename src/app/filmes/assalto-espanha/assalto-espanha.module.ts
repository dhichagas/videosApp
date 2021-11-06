import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssaltoEspanhaPageRoutingModule } from './assalto-espanha-routing.module';

import { AssaltoEspanhaPage } from './assalto-espanha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssaltoEspanhaPageRoutingModule
  ],
  declarations: [AssaltoEspanhaPage]
})
export class AssaltoEspanhaPageModule {}
