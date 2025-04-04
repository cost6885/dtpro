/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================
*/

import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import LogoAsana from "assets/images/small-logos/logo-asana.svg";
import logoGithub from "assets/images/small-logos/github.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";

export default function data() {
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "과제명", accessor: "project", width: "30%", align: "left" },
      { Header: "수준", accessor: "level", align: "left" },
      { Header: "현황", accessor: "status", align: "center" },
      { Header: "완료도", accessor: "completion", align: "center" },
    ],

    rows: [
      {
        project: <Project image={LogoAsana} name="홈페이지 리뉴얼" />,
        level: "class1",
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            진행중
          </MDTypography>
        ),
        completion: <Progress color="info" value={60} />,
      },
      {
        project: <Project image={logoGithub} name="모바일 앱 개발" />,
        level: "class2",
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            완료
          </MDTypography>
        ),
        completion: <Progress color="success" value={100} />,
      },
      {
        project: <Project image={logoAtlassian} name="데이터 분석 프로젝트" />,
        level: "class3",
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            취소
          </MDTypography>
        ),
        completion: <Progress color="error" value={0} />,
      },
      {
        project: <Project image={logoSpotify} name="교육 플랫폼 개발" />,
        level: "class2",
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            진행중
          </MDTypography>
        ),
        completion: <Progress color="info" value={80} />,
      },
    ],
  };
}
