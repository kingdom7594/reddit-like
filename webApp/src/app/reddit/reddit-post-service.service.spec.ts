import { TestBed, inject } from '@angular/core/testing';

import { RedditPostServiceService } from './reddit-post-service.service';

describe('RedditPostServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedditPostServiceService]
    });
  });

  it('should be created', inject([RedditPostServiceService], (service: RedditPostServiceService) => {
    expect(service).toBeTruthy();
  }));
});
