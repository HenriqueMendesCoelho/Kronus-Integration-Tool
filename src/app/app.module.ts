import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { LayoutWithoutNavbarComponent } from './components/layouts/layout-without-navbar/layout-without-navbar.component';
import { LayoutWithNavbarComponent } from './components/layouts/layout-with-navbar/layout-with-navbar.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, LayoutWithoutNavbarComponent, LayoutWithNavbarComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
