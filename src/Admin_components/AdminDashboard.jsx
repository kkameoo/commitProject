import { useState } from "react";
import styled from "styled-components";
import AdminFilter from "./AdminFilter";
import AdminUserList from "./AdminUserList";
import AdminUserModal from "./AdminUserModal";

const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const ContentArea = styled.div`
  flex: 1;
  padding: 20px;
`;

const mockUsers = [
  {
    id: 1,
    name: "김철수",
    age: 25,
    gender: "남",
    job: "회사원",
    marriageStatus: "초혼",
    hobby: ["운동", "독서"],
    profileImg: "",
  },
  {
    id: 2,
    name: "이영희",
    age: 29,
    gender: "여",
    job: "학생",
    marriageStatus: "초혼",
    hobby: ["바이크"],
    profileImg: "",
  },
];

function AdminDashboard({ users }) {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [selectedUser, setSelectedUser] = useState(null);
  const [infoState, setInfoState] = useState("user");
  const [userList, setUserList] = useState();
  // ✅ 필터링된 회원 목록 (추천 회원)
  const filteredUsers = mockUsers.filter((user) =>
    Object.entries(selectedFilters).every(
      ([category, values]) =>
        values.length === 0 || values.includes(user[category])
    )
  );
  console.log(users);

  return (
    <DashboardContainer>
      {/* 회원 목록은 필터에 영향을 받지 않음! */}
      <AdminUserList users={users} onSelectUser={setSelectedUser} />
      <ContentArea>
        {/* 필터 적용된 유저를 필터링된 회원 섹션에서만 사용 */}
        <AdminFilter
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />

        {/* 필터링된 회원 목록 */}
        <div>
          <h3>🔍 추천 회원</h3>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => <p key={user.id}>{user.name}</p>)
          ) : (
            <p>조건에 맞는 회원이 없습니다.</p>
          )}
        </div>

        {/* 선택된 회원 상세 정보 모달 */}
        {selectedUser && (
          <AdminUserModal
            user={selectedUser}
            onClose={() => setSelectedUser(null)}
            infoState={infoState}
            setInfoState={setInfoState}
          />
        )}
      </ContentArea>
    </DashboardContainer>
  );
}

export default AdminDashboard;
