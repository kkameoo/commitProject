import styled from "styled-components";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from "recharts";

// ✅ 연도별 성혼 성사율 데이터
const data = [
  { year: "2021", 남성: 50, 여성: 48 },
  { year: "2022", 남성: 60, 여성: 58 },
  { year: "2023", 남성: 72, 여성: 70 },
  { year: "2024", 남성: 85, 여성: 83 } 
];

// ✅ 전체 레이아웃 (차트 + 텍스트 + 버튼)
const ChartSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1300px;
  margin: 10px auto;
  gap: 100px;
`;

// ✅ 차트 컨테이너 (왼쪽 정렬, 크기 조정)
const ChartWrapper = styled.div`
  width: 60%;
  min-height: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: -124px;
`;

// ✅ 차트 제목 스타일
const ChartTitle = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #D9534F;
  margin-bottom: 10px;
  text-align: center;
`;

// ✅ 오른쪽 텍스트 & 버튼 컨테이너
const InfoContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`;

// ✅ 제목 스타일
const InfoTitle = styled.h2`
  font-size: 28px;
  color: #D9534F;
  font-weight: bold;
  margin-bottom: 15px;
`;

// ✅ 설명 스타일
const InfoText = styled.p`
  font-size: 18px;
  color: #333;
  margin-bottom: 25px;
`;

// ✅ 버튼 스타일
const InfoButton = styled.button`
  width: 220px;
  padding: 12px 18px;
  font-size: 16px;
  color: white;
  background-color: #D9534F;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 12px;
  transition: background 0.3s;

  &:hover {
    background-color: #C9302C;
  }
`;

function ChartComponent() {
  return (
    <ChartSection>
      {/* ✅ 왼쪽 차트 */}
      <ChartWrapper>
        <ChartTitle>&lt;COMMIT 성혼 달성률&gt;</ChartTitle> {/* ✅ 차트 위에 제목 추가 */}
        <ResponsiveContainer width="100%" height={500}>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[0, 100]} />
            <YAxis dataKey="year" type="category" width={100} />
            <Tooltip />
            <Legend />
            <Bar dataKey="남성" fill="#F299B9" barSize={40}>
              <LabelList
                dataKey="남성"
                position="right"
                fill="#D9534F"
                fontSize={16}
                fontWeight="bold"
              />
            </Bar>
            <Bar dataKey="여성" fill="#7673D9" barSize={40}>
              <LabelList
                dataKey="여성"
                position="right"
                fill="#4A90E2"
                fontSize={16}
                fontWeight="bold"
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartWrapper>

      {/* ✅ 오른쪽 문구 & 버튼 */}
      <InfoContainer>
        <InfoTitle>빠른 인연 맺기</InfoTitle>
        <InfoText>가입일로부터 7일 내 첫 만남이 주선됩니다 땡큐죠?</InfoText>
        <InfoButton>바로 상담</InfoButton>
        <InfoButton>매칭 시스템 한 눈에 보기</InfoButton>
      </InfoContainer>
    </ChartSection>
  );
}

export default ChartComponent;
