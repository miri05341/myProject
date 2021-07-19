import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './material.module';
import { ConfigurationService } from 'services';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
  ],
  providers: [
    {provide:APP_INITIALIZER,useFactory:initConfiguration,deps:[ConfigurationService],multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function initConfiguration(config:ConfigurationService){    
  return ((_:any)=>config.initConfiguration(environment.servicePath))
}