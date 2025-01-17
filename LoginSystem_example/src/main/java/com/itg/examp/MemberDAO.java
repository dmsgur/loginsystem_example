package com.itg.examp;

import java.util.List;
import java.util.Map;

import com.itg.examp.dto.MemberDTO;

public interface MemberDAO {
	public MemberDTO loginMember(Map<String, String> logdata);
	public  List<MemberDTO> getListMember();
	public MemberDTO signupMember(MemberDTO member);
}
