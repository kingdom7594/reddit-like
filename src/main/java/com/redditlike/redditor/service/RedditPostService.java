package com.redditlike.redditor.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.redditlike.redditor.model.RedditPostLists;


public interface RedditPostService {
	List<RedditPostLists> selectRedditLists() throws Exception;

}
