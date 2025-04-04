// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";  // 교육 일정에 맞게 수정
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";  // 교육 일정 표시 컴포넌트로 사용

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          {/* 인원 현황 카드 */}
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="people"
                title="전체 인원"
                count="2,300"
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "지난 달보다",
                }}
              />
            </MDBox>
          </Grid>
          
          {/* 과제 현황 카드 */}
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="assignment"
                title="진행 중인 과제"
                count="120"
                percentage={{
                  color: "warning",
                  amount: "+5%",
                  label: "진행 중인 과제",
                }}
              />
            </MDBox>
          </Grid>
          
          {/* 인증 현황 카드 */}
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="check_circle"
                title="인증 완료 인원"
                count="2,000"
                percentage={{
                  color: "success",
                  amount: "+10%",
                  label: "지난 주보다",
                }}
              />
            </MDBox>
          </Grid>
          
          {/* 인증 대기 인원 */}
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="pending_actions"
                title="인증 대기 인원"
                count="300"
                percentage={{
                  color: "danger",
                  amount: "-3%",
                  label: "지난 달보다",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>

        {/* 과제 진행률 차트 */}
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="과제 현황"
                  description="전체 과제 진행 현황"
                  date="업데이트됨"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>

            {/* 과제 우선순위 라인 차트 */}
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="과제 우선순위"
                  description="우선순위가 높은 과제"
                  date="방금 업데이트됨"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>

        {/* 교육 일정 */}
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />  {/* 교육 일정 컴포넌트 */}
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />  {/* 교육 일정 표시 */}
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
