import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SettingsPage } from '../pages/settings/settings';
import { LightsPage } from '../pages/lights/lights';
import { ScenesPage } from '../pages/scenes/scenes';
import { RoutinesPage } from '../pages/routines/routines';
import { GroupsPage } from '../pages/groups/groups';
import { TabsPage } from '../pages/tabs/tabs';
import {HttpClientModule} from '@angular/common/http';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    GroupsPage,
    LightsPage,
    ScenesPage,
    RoutinesPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    GroupsPage,
    LightsPage,
    ScenesPage,
    RoutinesPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
