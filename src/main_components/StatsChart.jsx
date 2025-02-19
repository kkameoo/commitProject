import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// ✅ 차트 데이터
const data = [
  { name: "좋다", percent: 70 },
  { name: "안 써봤음", percent: 20 },
  { name: "별로", percent: 10 },
];

// ✅ 컨테이너 스타일
const StatsContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 50px auto;
  // background: #f2f2f2;
  padding: 20px;
  border-radius: 8px;
  // box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

// ✅ 정적 통계 데이터 영역 스타일
const SummaryBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const SummaryBox = styled.div`
  // flex:1;
  width: 400px;
  height: 120px;
  background: rgb(255, 222, 222);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  margin: 0 10px;
`;

const SummaryTitle = styled.h3`
  font-size: 16px;
  color: rgb(199, 81, 81);
  margin-bottom: 5px;
`;

const SummaryNumber = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: rgb(255, 0, 81);
`;

const SummaryUnit = styled.span`
  font-size: 18px;
  color: rgb(255, 0, 81);
`;

// ✅ 차트 컨테이너
const ChartWrapper = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
`;

function StatsChart() {
  return (
    <StatsContainer>
      {/* ✅ 차트 위에 정적인 데이터 박스 추가 */}
      <SummaryBoxContainer>
        <SummaryBox>
          <SummaryTitle>COMMIT 총 성혼커플수</SummaryTitle>
          <SummaryNumber>50,988</SummaryNumber>
          <SummaryUnit>명</SummaryUnit>
        </SummaryBox>
        <SummaryBox>
          <SummaryTitle>결혼예정인 성혼커플수</SummaryTitle>
          <SummaryNumber>1,016</SummaryNumber>
          <SummaryUnit>명</SummaryUnit>
        </SummaryBox>
        <SummaryBox>
          <SummaryTitle>결혼한 성혼커플수</SummaryTitle>
          <SummaryNumber>49,972</SummaryNumber>
          <SummaryUnit>명</SummaryUnit>
        </SummaryBox>
      </SummaryBoxContainer>

      {/* ✅ 기존 차트 */}
      <ChartWrapper>
        <h3 style={{ textAlign: "center", color: "#D97777" }}>
          commit 고객 만족도
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="percent" fill="#D97777" barSize={50} />
          </BarChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </StatsContainer>
  );
}

export default StatsChart;
