import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScenesPage } from './scenes';

@NgModule({
  declarations: [
    ScenesPage,
  ],
  imports: [
    IonicPageModule.forChild(ScenesPage),
  ],
})
export class ScenesPageModule {}
