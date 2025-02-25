import Footer from "../components/Footer";
import AdminDashboard from "../Admin_components/AdminDashboard";
import { useEffect, useState } from "react";

function Admin() {
  const [users, setUsers] = useState();
  const apiUrl = "http://localhost:8927";

  const getUsers = async () => {
    try {
      const response = await fetch(apiUrl + "/api/user/all");

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setUsers(data);
      }
      if (!response.ok) {
        throw new Error("데이터를 받아오지 못했습니다.");
      }
    } catch (Error) {
      console.log(Error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <AdminDashboard users={users} />
      <button onClick={() => getUsers()} />
      <Footer />
    </>
  );
}

export default Admin;
