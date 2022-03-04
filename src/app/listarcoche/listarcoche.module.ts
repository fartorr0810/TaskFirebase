import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarcochePageRoutingModule } from './listarcoche-routing.module';

import { ListarcochePage } from './listarcoche.page';
import { CochemodalService } from '../services/cochemodal.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarcochePageRoutingModule
  ],
  declarations: [ListarcochePage],
  exports:[ListarcochePage],
  providers:[CochemodalService]
})
export class ListarcochePageModule {}
