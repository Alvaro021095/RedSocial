import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnaliticsPage } from './analitics';

@NgModule({
  declarations: [
    AnaliticsPage,
  ],
  imports: [
    IonicPageModule.forChild(AnaliticsPage),
  ],
})
export class AnaliticsPageModule {}
