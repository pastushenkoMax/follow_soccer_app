package com.mp.sra.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.mashape.unirest.http.exceptions.UnirestException;

@Controller
public class MainController {

	@GetMapping("/")
	public static String index() throws UnirestException {
		return "index.jsp";	
	}
	@GetMapping("/league/{id}")
	public static String leaguePage(Model model, @PathVariable("id") Long id) throws UnirestException {
		model.addAttribute("league_id", id);
		return "leaguePage.jsp";	
	}
}
