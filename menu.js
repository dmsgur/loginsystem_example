menu_sets = []
//메뉴 생성기 시작 S==============================
class Menu{
    constructor(mtitle){
        this.mtitle=mtitle;
    }
    mtitle;url;tips;
}
//?menu=0 의 쿼리스트링은 데이터 생성함수 data_sets 객체의 push 순서와 일치합니다.
menu0 = new Menu("개발환경구축")//1. 개발목적/언어-선정/요구사항명세/분석 2. 구현도구/라이센스 3. 테스트도구(junit,mockobj)  4. 형상관리도구  5. 빌드도구
menu0.url = "?menu=0"
menu0.tips = ["1.개발목적","2.개발언어선정","3.요구사항명세","4.구현도구","5.테스트도구","6.형상관리도구","7.빌드도구"]
menu1 = new Menu("공통모듈 구현 - 회원리스트 출력")
menu1.url = "?menu=1"
menu1.tips = ["1.공통모듈구현","2.테스트케이스","3.단위테스트"]
menu2 = new Menu("서버프로그램 구현")
menu2.url = "?menu=2"
menu2.tips = ["1.회원가입","2.회원로그인","3.회원리스트","4.테스트케이스","5.목오브젝생성및테스트","6.결과보고서"]
menu3 = new Menu("배치프로그램구현")
menu3.url = "?menu=3"
menu3.tips = ["1.배치스케줄구성","2.배치프로그램테스트"]



menu_sets.push(menu0)
menu_sets.push(menu1)
menu_sets.push(menu2)
menu_sets.push(menu3)

