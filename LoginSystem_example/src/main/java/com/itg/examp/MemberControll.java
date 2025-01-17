package com.itg.examp;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itg.examp.dto.MemberDTO;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/member")
public class MemberControll {
	@Autowired
	MemberService service;
	@Autowired
	MemberDAO dao;
	
	@PostMapping("/login")
	public Map loginMember(HttpServletRequest request, @RequestBody Map<String, String> logdata) {
		System.out.println(logdata);
		MemberDTO dto = dao.loginMember(logdata);
		HashMap<Object, Object> hm = new HashMap();
		if (dto!=null) {
			HttpSession auth = request.getSession(true);
			auth.setAttribute("mid", dto.getMid());
			auth.setAttribute("name", dto.getName());
			hm.put("message", "로그인성공");
			hm.put("member", dto);
		}else {
			hm.put("message", "아이디나 비밀번호를 다시 확인하세요");
		}
		return hm;
		
	}
	@GetMapping("/logout")
	public void logoutMember(HttpServletRequest request,HttpServletResponse response) {
		HttpSession auth = request.getSession(false);
		if(auth!=null) {
			auth.invalidate();		
		}
		try {
			response.sendRedirect("/");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	@GetMapping("/memList")
	public Map getListMember(HttpServletRequest request) {
		HttpSession auth = request.getSession(false);
		HashMap<String, Object> hm = new HashMap<>();
		if(auth!=null) {
			List<MemberDTO> ll = dao.getListMember();
			hm.put("members", ll);
			hm.put("message", "success");
		}else {
			hm.put("message", "failure");
		}
		return hm;
	}
	@PostMapping("/signup")
	public Map signupMember(HttpServletRequest request, MemberDTO sign_member) {
		boolean valid = service.validPassword(sign_member.getMpw());
		System.out.println(sign_member.toString());
		HashMap<Object, Object> hm = new HashMap();
		if(valid) {
			MemberDTO dto = dao.signupMember(sign_member);
			if (dto!=null) {
				hm.put("message", "가입성공");
				hm.put("member", dto);
				HttpSession auth = request.getSession(true);
				auth.setAttribute("mid", dto.getMid());
				auth.setAttribute("name", dto.getName());
			}else {
				hm.put("message", "알수없는 오류 입력값을 다시 확인후 시도하세요");
			}
			return hm;
		}else {
			hm.put("message", "비밀번호 길이가 너무 짧아요 8글자 이상 쓰세요");
			return hm;
		}
		
	}
}
