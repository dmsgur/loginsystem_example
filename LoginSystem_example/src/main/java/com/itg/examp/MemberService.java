package com.itg.examp;

import org.springframework.stereotype.Service;

@Service
public class MemberService {
	public boolean validPassword(String mpw) {//비밀번호 8자리 이상확인
		if(mpw.length()>=8)return true;
		return false;
	}
	public boolean validId(String mid) {//아이디 4글자 이상인지 확인
		if(mid.length()>=4)return true;
		return false;
	}
	
}
