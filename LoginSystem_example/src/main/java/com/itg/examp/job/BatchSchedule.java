package com.itg.examp.job;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.JobParametersBuilder;
import org.springframework.batch.core.JobParametersInvalidException;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.batch.core.repository.JobExecutionAlreadyRunningException;
import org.springframework.batch.core.repository.JobInstanceAlreadyCompleteException;
import org.springframework.batch.core.repository.JobRestartException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
@Component
public class BatchSchedule {
	@Autowired
	private final Job job = null;
	@Autowired
	private final JobLauncher jobLauncher = null;
	@Scheduled(cron = "0/10 * * * * ?")
	public void runjob(){
		System.out.println("스레쥴 실행됨 ====== job run 5 second");
		try {
			jobLauncher.run(job, new JobParametersBuilder().toJobParameters());
		} catch (JobExecutionAlreadyRunningException | JobRestartException | JobInstanceAlreadyCompleteException
				| JobParametersInvalidException e) {
			e.printStackTrace();
		}
	}
}
/*필드			허용범위  특수문자
 * 초 (Seconds) 0 ~ 59 , - * / 
 * 분 (Minutes) 0 ~ 59 , - * /
 * 시 (Hours) 0 ~ 23 , - * /
 * 일 (Day) 1 ~ 31 , - * ? / L W
 * 월 (Month) 1 ~ 12 or JAN ~ DEC , - * /
 * 요일 (Week) 0 ~ 6 or SUN ~ SAT(7도 일요일) , - * ? / L #
 * 연도 (Year) empty or 1970 ~ 2099 
 */

/*
 * : 모든 값을 뜻합니다. ● ? : 특정한 값이 없음을 뜻합니다.  ● - : 범위를 뜻합니다. (예) 월요일에서 수요일까지는
 * MON-WED로 표현 ● , : 특별한 값일 때만 동작 (예) 월,수,금 MON,WED,FRI  ● / : 시작시간 / 단위
 *  (예) 0분부터 매 5분 0/5 ● L : 일에서 사용하면 마지막 일, 요일에서는 마지막 요일(토요일) ● W : 가장 가까운 평일
 * (예) 15W는 15일에서 가장 가까운 평일 (월 ~ 금)을 찾음 ● # : 몇째주의 무슨 요일을 표현 (예) 3#2 : 2번째주 수요일
 */

