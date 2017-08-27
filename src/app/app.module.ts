import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SubpageComponent } from './subpage.component';
import { OtherpageComponent } from './otherpage.component';

@NgModule({
  declarations: [
    AppComponent,
    SubpageComponent,
    OtherpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
