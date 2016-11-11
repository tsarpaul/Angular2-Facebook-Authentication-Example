import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from './shared';

import { routing, appRoutingProviders } from './app.routing';

import { SHARED_SERVICES } from './shared';

import { AppComponent } from './app.component';
import { LoginPanelComponent } from './login-panel';
import { MainComponent, DashboardComponent } from './main';

@NgModule({
  declarations: [
    AppComponent,
    LoginPanelComponent,
    MainComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
    MaterialModule,

    routing
  ],
  providers: [
    appRoutingProviders,
    SHARED_SERVICES
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
