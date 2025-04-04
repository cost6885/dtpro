/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

// @mui material components
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// 예시 팀 이미지 (직원 프로필 이미지)
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <MDAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  const Task = ({ name, members }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "과제명", accessor: "taskName", width: "45%", align: "left" },
      { Header: "과제 수행자", accessor: "taskMember", width: "10%", align: "left" },
      { Header: "현황", accessor: "status", align: "center" },
    ],

    rows: [
      {
        taskName: <Task name="Python 기초 교육" />,
        taskMember: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "김상우"],
              [team2, "오민석"],
            ])}
          </MDBox>
        ),
        status: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={60} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        taskName: <Task name="React 개발 입문" />,
        taskMember: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team3, "서민표"],
              [team4, "이병찬"],
            ])}
          </MDBox>
        ),
        status: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        taskName: <Task name="기초 프로그래밍 교육" />,
        taskMember: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team2, "전진"],
              [team3, "정태양"],
            ])}
          </MDBox>
        ),
        status: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={40} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        taskName: <Task name="데이터 분석 실습" />,
        taskMember: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "조시묵"],
              [team4, "김관수"],
            ])}
          </MDBox>
        ),
        status: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={80} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
    ],
  };
}
