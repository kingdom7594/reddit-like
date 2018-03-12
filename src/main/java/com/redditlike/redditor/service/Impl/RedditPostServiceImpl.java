package com.redditlike.redditor.service.Impl;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.redditlike.redditor.dao.RedditPostMapper;
import com.redditlike.redditor.model.RedditPostLists;
import com.redditlike.redditor.service.RedditPostService;

@Service
public class RedditPostServiceImpl implements RedditPostService{
	
  @Autowired 
  private RedditPostMapper redditPostMapper;
  
  @Override
  @Transactional
  public List<RedditPostLists>	selectRedditLists() throws Exception{
	  
	  return  redditPostMapper.selectRedditLists();
  }

}
