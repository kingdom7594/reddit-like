import { Component } from '@angular/core';
import { RedditPostServiceService } from './reddit/reddit-post-service.service';
import { RedditPost } from './reddit/reddit-post';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RedditPostServiceService]
})
export class AppComponent {
  title = 'reddit';
  public apiData: any;

  result: RedditPost[];
  posts: RedditPost;
  
  constructor(
  public redditPostServiceService: RedditPostServiceService) { 
  
  	this.loadData();
  
  }
  

  
  loadData(){
  	this.redditPostServiceService.load()
    .then(data => {
    debugger;
    this.apiData = data;
  });}
}
