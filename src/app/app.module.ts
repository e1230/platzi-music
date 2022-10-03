import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {IonicStorageModule} from "@ionic/storage-angular";
import { SongsModalPageModule } from './songs-modal/songs-modal.module';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../environments/environment.prod';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, SongsModalPageModule , IonicStorageModule.forRoot(),AgmCoreModule.forRoot({apiKey: environment.mapsKeyApi}) ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
