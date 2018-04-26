import { AnaliticsPage } from './../pages/analitics/analitics';
import { OtraPage } from './../pages/otra/otra';
import { AboutPage } from './../pages/about/about';
import { ContactPage } from './../pages/contact/contact';
import { TabsPage } from './../pages/tabs/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
	declarations: [ MyApp, HomePage, TabsPage, AboutPage, ContactPage, AnaliticsPage, OtraPage ],
	imports: [ BrowserModule, IonicModule.forRoot(MyApp) ],
	bootstrap: [ IonicApp ],
	entryComponents: [ MyApp, HomePage, TabsPage, AboutPage, ContactPage, AnaliticsPage, OtraPage ],
	providers: [ StatusBar, SplashScreen, { provide: ErrorHandler, useClass: IonicErrorHandler } ]
})
export class AppModule {}
