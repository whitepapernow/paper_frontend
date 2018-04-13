import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WhitepaperComponent } from './whitepaper/whitepaper.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WhitepaperComponent,
    LeftMenuComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ {
      provide: APP_BASE_HREF,
      useValue: (window.location.pathname || '') // FIX FOR IPFS !!
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
