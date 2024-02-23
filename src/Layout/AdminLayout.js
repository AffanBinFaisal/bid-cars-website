import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/General/AdminNavbar/AdminNavbar";

const AdminLayout = () => {
  return (
    <main>
      <AdminNavbar />
      <Outlet />
    </main>
  );
};

export default AdminLayout;
