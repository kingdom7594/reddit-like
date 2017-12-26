import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import {HttpModule} from '@angular/http';
import {MatToolbarModule} from '@angular/material';
import { AppComponent } from './app.component';
import { RedditComponent } from './reddit/reddit.component';
import { RedditPostServiceService } from './reddit/reddit-post-service.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RedditComponent,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [RedditPostServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
