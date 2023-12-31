import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'area-pix',
    loadChildren: () => import('./area-pix/area-pix.module').then( m => m.AreaPixPageModule)
  },
  {
    path: 'cobrar',
    loadChildren: () => import('./cobrar/cobrar.module').then( m => m.CobrarPageModule)
  },
  {
    path: 'depositar',
    loadChildren: () => import('./depositar/depositar.module').then( m => m.DepositarPageModule)
  },
  {
    path: 'historico',
    loadChildren: () => import('./historico/historico.module').then( m => m.HistoricoPageModule)
  },
  {
    path: 'investir',
    loadChildren: () => import('./investir/investir.module').then( m => m.InvestirPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu-principal',
    loadChildren: () => import('./menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  },
  {
    path: 'pagar',
    loadChildren: () => import('./pagar/pagar.module').then( m => m.PagarPageModule)
  },
  {
    path: 'perguntas-frequentes',
    loadChildren: () => import('./perguntas-frequentes/perguntas-frequentes.module').then( m => m.PerguntasFrequentesPageModule)
  },
  {
    path: 'transferir',
    loadChildren: () => import('./transferir/transferir.module').then( m => m.TransferirPageModule)
  },
  {
    path: 'menu-principal-escondido',
    loadChildren: () => import('./menu-principal-escondido/menu-principal-escondido.module').then( m => m.MenuPrincipalEscondidoPageModule)
  },
  {
    path: 'historico-escondido',
    loadChildren: () => import('./historico-escondido/historico-escondido.module').then( m => m.HistoricoEscondidoPageModule)
  },
  {
    path: 'funcionalidades-escondidas',
    loadChildren: () => import('./funcionalidades-escondidas/funcionalidades-escondidas.module').then( m => m.FuncionalidadesEscondidasPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
