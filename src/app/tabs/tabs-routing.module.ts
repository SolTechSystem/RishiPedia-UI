import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'play-tab',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../play-tab/play.module').then(m => m.PlayTabPageModule)
          }
        ]
      },
      {
        path: 'account-tab',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../account-tab/account-tab.module').then(m => m.AccountTabPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/play-tab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/play-tab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
