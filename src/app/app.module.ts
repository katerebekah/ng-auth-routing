import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SubpageComponent } from './subpage.component';
import { OtherpageComponent } from './otherpage.component';

import { AuthGuard } from './security/auth.guard';
import { ConfigService } from './security/config.service';
import { SecurityService } from './security/security.service';

@NgModule({
  declarations: [
    AppComponent,
    SubpageComponent,
    OtherpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ 
    AuthGuard,
    SecurityService,
    { provide: APP_INITIALIZER, useFactory: (secService: SecurityService) => () => { secService.loadUrl(); },  deps: [SecurityService], multi: true  },
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
