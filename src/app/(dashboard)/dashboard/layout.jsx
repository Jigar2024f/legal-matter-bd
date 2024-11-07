"use client";
import isAuth from "@/api/isAuth";
import AdminDashboardSidebar from "@/app/CustomComponent/Dashboard/Sidebar";
import { Toaster } from "@/components/ui/toaster";

const AdminDashboardLayout = ({ children }) => {
  return (
    <div>
      <div className=" ">
        <div className="">
          <AdminDashboardSidebar> {children}</AdminDashboardSidebar>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default isAuth(AdminDashboardLayout);
