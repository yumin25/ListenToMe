package com.ssafy.a605.service;

import com.ssafy.a605.model.dto.ScheduleDto;
import com.ssafy.a605.model.entity.Schedule;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.time.LocalDateTime;
import java.util.List;

public interface ScheduleService {
    public Page<ScheduleDto> getCounselorHistorySchedule(String userEmail, Pageable pageRequest) throws Exception;
    public boolean setScheduleTime(ScheduleDto scheduleDto) throws Exception;
    public boolean checkScheduleTime(LocalDateTime dateTime) throws Exception;
    public List<ScheduleDto> getCounselorSchedule(String userEmail) throws Exception;
    public boolean requestCounseling(String userEmail, int scheduleId) throws Exception;
}