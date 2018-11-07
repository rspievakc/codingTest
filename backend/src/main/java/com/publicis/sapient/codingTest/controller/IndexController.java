package com.publicis.sapient.codingTest.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Creates a custom controller to handle the root mapping to the
 * static index.html
 *
 * @author Rodrigo Spievak Cavalcanti
 */
@Controller
public class IndexController {
	
	@RequestMapping("/")
    public String index() {
        return "/static/index.html";
    }

}