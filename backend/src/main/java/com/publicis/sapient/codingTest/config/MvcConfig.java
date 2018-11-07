package com.publicis.sapient.codingTest.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Configures the Spring's MVC Framework.
 *
 * @author Rodrigo Spievak Cavalcanti
 */
@Configuration
// @EnableWebMvc
public class MvcConfig implements WebMvcConfigurer {

	public MvcConfig() {
	}

	/**
	 * Configures the resource path for the static content
	 */
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/static/**").addResourceLocations("classpath:static/");
	}
	
}
