package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.ui.Model;

@Controller
public class Dealer {

    @RequestMapping("dealer/login")
    public String login(Model model) {
    		return "a-1_login";
    }
}
