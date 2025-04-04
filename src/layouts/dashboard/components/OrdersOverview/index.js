import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  const [scheduleData, setScheduleData] = useState([]);

  // 백엔드에서 교육 일정 데이터를 가져오는 useEffect 훅
  useEffect(() => {
    fetch("http://3.34.97.222:5000/api/education_schedule")  // 실제 API URL에 맞게 수정
      .then(response => response.json())
      .then(data => {
        console.log("Education Schedule Data:", data);  // 콘솔에서 데이터 확인
        setScheduleData(data);  // 상태에 교육 일정 데이터 저장
      })
      .catch(error => {
        console.error("Error fetching education schedule data:", error);  // 오류 확인
      });
  }, []);

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          교육 일정
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>calendar_today</Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              이번 달 교육 일정
            </MDTypography>
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        {scheduleData.length === 0 ? (
          <MDTypography variant="h6" color="text.secondary">
            교육 일정이 없습니다.
          </MDTypography>
        ) : (
          scheduleData.map((schedule, index) => (
            <TimelineItem
              key={index}
              color="info"  // 색상은 필요에 따라 변경
              icon="school"
              title={schedule.title}  // 교육 제목
              dateTime={schedule.dateTime}  // 교육 일정 시간
              description={schedule.status}  // 교육 상태 (예: 진행 중, 완료 등)
              lastItem={index === scheduleData.length - 1}  // 마지막 항목에 스타일 적용
            />
          ))
        )}
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
