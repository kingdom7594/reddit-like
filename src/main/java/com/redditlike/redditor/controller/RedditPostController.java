package com.redditlike.redditor.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.redditlike.redditor.model.MessageResult;
import com.redditlike.redditor.model.RedditPostLists;
import com.redditlike.redditor.service.RedditPostService;

@RestController
@CrossOrigin
public class RedditPostController {
	@Autowired
	private RedditPostService redditPostService;

	@RequestMapping("/reddit")
	@ResponseBody
	public MessageResult selectRedditLists() {
		MessageResult messageResult = new MessageResult();
		List<RedditPostLists> list = null;
		try {
			list = redditPostService.selectRedditLists();
			System.out.println(list);

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		 messageResult.setStatus(true);
		 messageResult.setData(list);
		 return messageResult; 

	}

}
