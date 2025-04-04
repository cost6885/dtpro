/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================
*/

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "과제수행자", accessor: "taskExecutor", width: "45%", align: "left" },
      { Header: "소속", accessor: "department", align: "left" },
      { Header: "상태", accessor: "status", align: "center" },
      { Header: "인증일", accessor: "certificationDate", align: "center" },
    ],

    rows: [
      {
        taskExecutor: <Author image={team2} name="홍길동" email="hong@creative-tim.com" />,
        department: <Job title="영업기획팀" description="영업 기획" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="DT 준전문가" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        certificationDate: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2022년 5월
          </MDTypography>
        ),
      },
      {
        taskExecutor: <Author image={team3} name="김상우" email="kim@creative-tim.com" />,
        department: <Job title="자사몰사업팀" description="온라인 사업" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="DT 전문가" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        certificationDate: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2021년 12월
          </MDTypography>
        ),
      },
      {
        taskExecutor: <Author image={team4} name="이병찬" email="lee@creative-tim.com" />,
        department: <Job title="자사몰사업팀" description="사업 개발" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="DT 준전문가" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        certificationDate: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2020년 9월
          </MDTypography>
        ),
      },
    ],
  };
}
