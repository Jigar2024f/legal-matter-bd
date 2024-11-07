import AdminDashboardSidebar from "@/app/CustomComponent/Dashboard/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
export default function AdminDashboardLayout({ children }) {
  const cookieStore = cookies();
  const token = cookieStore.get("accessToken")?.value;
  if (!token) {
    redirect("/");
  }
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
}
