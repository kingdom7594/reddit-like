package com.redditlike.redditor.model;

public class MessageResult<T> {
	private boolean status;
	private String   message;
	protected T data;
	
	public MessageResult() {
		
	}
	
	public MessageResult(Boolean status ,String message) {
		this.status = status;
		this.message = message;
		
	} 
	
	public MessageResult(Boolean status ,String  message,T data) {
		this.status = status;
		this.message =message;
		this.data = data;
		
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}
	
	
	
	

}
