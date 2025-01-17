package com.itg.examp.job;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.job.builder.JobBuilder;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.builder.StepBuilder;
import org.springframework.batch.core.step.tasklet.Tasklet;
import org.springframework.batch.repeat.RepeatStatus;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.PlatformTransactionManager;
@Configuration
public class BatchConfiguration {
	int count=0;
    @Bean
    public Job helloJob(JobRepository jobRepository, Step helloStep) {
        return new JobBuilder("helloJob", jobRepository)
                .start(helloStep)
                .build();
    }
    //https://docs.spring.io/spring-batch/reference/step/chunk-oriented-processing/restart.html
    @Bean
    public Step helloStep(JobRepository jobRepository, Tasklet helloTasklet, PlatformTransactionManager transactionManager) {
        return new StepBuilder("helloStep", jobRepository)
                .tasklet(helloTasklet, transactionManager)
                .allowStartIfComplete(true)//배치작업 지속 시작
                .build();
    }
    @Bean
    public Tasklet helloTasklet() {
        return (contribution, chunkContext) -> {
        	count++;
            System.out.println(count+". xxxxxx Hello! 스프링 배치 실행중!! xxxxxx");//배치작업
            return RepeatStatus.FINISHED;
        };
    }
}