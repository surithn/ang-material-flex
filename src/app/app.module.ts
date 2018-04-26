import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SidenavExComponent } from './sidenav-ex/sidenav-ex.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent, SidenavExComponent, HeaderComponent
  ],
  imports: [
    BrowserModule, MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
