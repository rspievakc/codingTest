package com.publicis.sapient.codingTest.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {
	
	@RequestMapping("/")
    public String index() {
        return "/static/index.html";
    }

}