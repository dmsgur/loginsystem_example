
//메뉴 생성기 종료 E==============================
//데이터 아키텍처{sub_title:"",sub_content:"",sub_img:[],user_fill:""}
let data_sets=[]
class DataSet{
	constructor(sub_title,menuNum){this.sub_title=sub_title}
	user_fill=""
	sub_content=[]
	sub_img=[]
	set_content(content){this.sub_content.push(content)}
	set_img(num,obj){
		if(!this.sub_img[num]){this.sub_img[num]=[]}
		this.sub_img[num].push(obj)
	}
	set_fill(ufill){this.user_fill=ufill}
	 
}
// 최대 스냅샷은 10개 까지 등록 가능합니다.
// menu1. =============================================================
// d1 은 한 화면 입니다. 첫화면에는 set_img( 0 ~ n) 의 첫번째가 출력되며, 첫번째 출력을 선택하면 set_img(0) 의 동일 번호이미지가 최종 출력됩니다.
let d1 = new DataSet("개발환경구축")//메인 타이틀 //메뉴번호
d1.set_content("개발목적을 작성합니다.")//서브 타이틀
d1.set_img(0,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술1"})//이미지타이틀
d1.set_img(0,{imgtitle:"이미지 타이틀",imgurl:"1w_VpWt44pW84hxctJo4cHyxzmp0VpzQm",imglog:"이미지에 대한 간략한 설명 서술2"})//이미지타이틀
d1.set_img(0,{imgtitle:"이미지 타이틀",imgurl:"1bx2inTLlp0sEEB3zWp4nL2OEvLm0tUj6",imglog:"이미지에 대한 간략한 설명 서술3"})//이미지타이틀
d1.set_img(0,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술4"})//이미지타이틀
d1.set_img(0,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술5"})//이미지타이틀
d1.set_img(0,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술6"})//이미지타이틀
d1.set_img(0,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술7"})//이미지타이틀
d1.set_img(0,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술8"})//이미지타이틀
d1.set_img(0,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술9"})//이미지타이틀

d1.set_content("개발언어선정을 작성합니다.")
d1.set_img(1,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술"})//이미지타이틀
d1.set_img(1,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술"})//이미지타이틀


d1.set_content("요구사항명세를 작성합니다.")
d1.set_img(2,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술"})//이미지타이틀
d1.set_img(2,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술"})//이미지타이틀

d1.set_content("구현도구를 작성합니다.")
d1.set_img(3,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술"})//이미지타이틀
d1.set_img(3,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술"})//이미지타이틀

d1.set_content("테스트도구를 작성합니다.")
d1.set_img(4,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술"})//이미지타이틀
d1.set_img(4,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술"})//이미지타이틀

d1.set_content("형상관리도구를 작성합니다.")
d1.set_img(5,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술"})//이미지타이틀
d1.set_img(5,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술"})//이미지타이틀

d1.set_content("빌드도구를 작성합니다.")
d1.set_img(6,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술"})//이미지타이틀
d1.set_img(6,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술"})//이미지타이틀

d1.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d1)

// menu2 =============================================================
let d2 = new DataSet("공통모듈구현")//메인타이틀

d2.set_content("공통모듈구현을 작성합니다.")//서브 타이틀
d2.set_img(0,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술"})//이미지타이틀
d2.set_img(0,{imgtitle:"이미지 타이틀",imgurl:"1bx2inTLlp0sEEB3zWp4nL2OEvLm0tUj6",imglog:"이미지에 대한 간략한 설명 서술"})//이미지타이틀

d2.set_content("테스트케이스를 작성합니다.")
d2.set_img(1,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술"})//이미지타이틀
d2.set_img(1,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술"})//이미지타이틀

d2.set_content("단위테스트를 작성합니다.")
d2.set_img(2,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술"})//이미지타이틀
d2.set_img(2,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7h1bx2inTLlp0sEEB3zWp4nL2OEvLm0tUj6uVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술"})//이미지타이틀

d1.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d2)

// menu3 =============================================================
let d3 = new DataSet("서버프로그램구현")//메인타이틀
d3.set_content("회원가입구현")//서브타이틀
d3.set_img(0,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술"})//이미지타이틀
d3.set_content("회원로그인구현")
d3.set_img(1,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술"})//이미지타이틀
d3.set_content("회원리스트연동")
d3.set_img(2,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술"})//이미지타이틀
d3.set_content("테스트케이스 작성")
d3.set_img(3,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술"})//이미지타이틀
d3.set_img(3,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술"})//이미지타이틀
d3.set_img(3,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술"})//이미지타이틀
d3.set_content("목오브젝트생성 및 테스트 구현")
d3.set_img(4,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술"})//이미지타이틀
d3.set_content("결과보고서 작성")
d3.set_img(5,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술"})//이미지타이틀

d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d3)

// menu4 =============================================================
let d4 = new DataSet("배치프로그램구현")//메인타이틀

d4.set_content("배치스케줄구현")//서브타이틀
d4.set_img(0,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술"})//이미지타이틀
d4.set_img(0,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술"})//이미지타이틀

d4.set_content("배치프로그램테스트 구현")
d4.set_img(1,{imgtitle:"이미지 타이틀",imgurl:"1S0rv5tVKoKnAqKRLrW7huVwCqFct3AnY",imglog:"이미지에 대한 간략한 설명 서술"})//이미지타이틀

d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d4)
console.log(JSON.stringify(data_sets[0]))