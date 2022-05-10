import React from "react";
import { Outlet } from "react-router";
import AdminLayout from "../../layouts/AdminLayout";
import SideBarAdmin from "../SideBarAdmin";

const MyAccount = () => {
  return (
    <>
      <AdminLayout />
      {/* Side Bar */}
      <div className="flex flex-col md:flex-row">
        <SideBarAdmin />
        <Outlet />
      </div>
    </>
  );
};

export default MyAccount;
