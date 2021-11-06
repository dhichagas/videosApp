import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssaltoEspanhaPage } from './assalto-espanha.page';

const routes: Routes = [
  {
    path: '',
    component: AssaltoEspanhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssaltoEspanhaPageRoutingModule {}
