import { Component, OnInit } from '@angular/core';
import { RedditPostServiceService } from './reddit-post-service.service';
import  { RedditPost } from  './reddit-post'


@Component({
  selector: 'app-root',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css'],
  providers: [RedditPostServiceService]
})
export class RedditComponent implements OnInit {
 
 public apiData: any;

  constructor(
  public redditPostServiceService: RedditPostServiceService) { 
  
  	this.loadData();
  
  }

  ngOnInit() {
  }
  
  loadData(){
  	this.redditPostServiceService.load()
    .then(data => {
    this.apiData = data;
  });}

}
