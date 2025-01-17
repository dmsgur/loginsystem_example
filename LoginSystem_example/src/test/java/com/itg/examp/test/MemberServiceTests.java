package com.itg.examp.test;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.itg.examp.MemberService;

@SpringBootTest
public class MemberServiceTests {
	String[] rightpw;
	String[] wrongpw;
	String[] rightid;
	String[] wrongid;
	@Autowired
	MemberService ms;
	@BeforeEach
	public void setVar() {
		rightpw=new String[]{"12345678","a1234567","ab#12345678"};
		wrongpw=new String[]{"1234567","0","000","12345","a123"};
		rightid=new String[] {"aaaa","abcd","a1234"};
		wrongid=new String[] {"0","a","abc"};
		
	}
	@Test
	public void testValidPassword() {
		boolean res=false;
		for(int i=0;i<wrongpw.length;i++) {
			res = ms.validPassword(wrongpw[i]);
			assertEquals(false, res,i+"::8글자 미만 비밀번호 입니다.");
		}
		for(int i=0;i<rightpw.length;i++) {
			res = ms.validPassword(rightpw[i]);
			assertEquals(true, res,i+"::올바른 비밀번호 입니다.");
		}		
	}
	@Test
	public void testValidId() {
		boolean res=false;
		for(int i=0;i<wrongid.length;i++) {
			res = ms.validId(wrongid[i]);
			assertEquals(false, res,i+"::잘못된 아이디 입니다..");
		}
		for(int i=0;i<rightid.length;i++) {
			res = ms.validId(rightid[i]);
			assertEquals(true, res,i+"::올바른 아이디 입니다.");
		}		
	}
	
}
