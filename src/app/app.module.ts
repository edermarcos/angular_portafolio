import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardPortafolioComponent } from './shared/components/card-portafolio/card-portafolio.component';

@NgModule({
  declarations: [
    AppComponent,
    CardPortafolioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
