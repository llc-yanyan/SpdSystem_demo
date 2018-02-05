package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.ui.Model;

@Controller
public class Dealer {

    @RequestMapping("dealer/")
    public String login(Model model) {
    		return "a-1";
    }

    @RequestMapping("dealer/passwordreissue/")
    public String passwordreissue(Model model) {
    		return "a-2";
    }

    @RequestMapping("dealer/authcode/")
    public String authcode(Model model) {
    		return "a-3";
    }

    @RequestMapping("dealer/resetpassword/")
    public String resetpassword(Model model) {
    		return "a-4";
    }

    @RequestMapping("dealer/registpassword/")
    public String registpassword(Model model) {
    		return "a-5";
    }

    @RequestMapping("dealer/logout")
    public String logout(Model model) {
    		return "a-6";
    }

    @RequestMapping("dealer/orderreceive/")
    public String orderreceive(Model model) {
    		return "b-1";
    }

    @RequestMapping("dealer/orderreceivelist/")
    public String orderreceivelist(Model model) {
    		return "b-2";
    }

    @RequestMapping("dealer/contactlist/")
    public String contactlist(Model model) {
    		return "c-1";
    }

    @RequestMapping("dealer/help/")
    public String help(Model model) {
    		return "d-1";
    }
}
