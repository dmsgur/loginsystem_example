package com.itg.examp;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.itg.examp.dto.MemberDTO;

@Repository
public class MemberDAOImpl implements MemberDAO{
	@Autowired
	SqlSessionTemplate session;
	public MemberDTO loginMember(Map<String, String> logdata) {
		MemberDTO dto = session.selectOne("memberMapper.memberlogin", logdata);
		System.out.println("로그인 성공 정보");
		System.out.println(dto);
		return dto;
	}
	public List<MemberDTO> getListMember() {
		List<MemberDTO> ll = session.selectList("memberMapper.memberList");
		return ll;
	}
	public MemberDTO signupMember(MemberDTO member) {
		int res = session.insert("memberMapper.signup", member);
		System.out.println("커리결과:"+res);
		MemberDTO dto=null;
		if(res >=1) {
			dto = getMemberInfo(member.getMid());
			System.out.println(dto.getMid());
		}		
		return dto;
	}
	public MemberDTO getMemberInfo(String mid) {
		MemberDTO dto = session.selectOne("memberMapper.memberinfo", mid);
		return dto;
	}
}
