import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarcochePage } from './listarcoche.page';

const routes: Routes = [
  {
    path: '',
    component: ListarcochePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarcochePageRoutingModule {}
