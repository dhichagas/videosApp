import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'profissional',
    loadChildren: () => import('./filmes/profissional/profissional.module').then( m => m.ProfissionalPageModule)
  },
  {
    path: 'assalto-espanha',
    loadChildren: () => import('./filmes/assalto-espanha/assalto-espanha.module').then( m => m.AssaltoEspanhaPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
