import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import {HttpModule} from '@angular/http';
import {MatToolbarModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppComponent } from './app.component';
import { RedditComponent } from './reddit/reddit.component';
import { RedditPostServiceService } from './reddit/reddit-post-service.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RedditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatPaginatorModule
  ],
  providers: [RedditPostServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
