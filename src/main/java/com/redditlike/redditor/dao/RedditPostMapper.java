package com.redditlike.redditor.dao;

import java.util.List;

import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import com.redditlike.redditor.model.RedditPostLists;


public interface RedditPostMapper {
	
	
		
		public  List<RedditPostLists> selectRedditLists() ;

	


}
