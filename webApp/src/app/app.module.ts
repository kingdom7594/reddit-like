import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from '@angular/material';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
