import Navbar from "@/components/layout/navbar";
import Sidebar from "@/components/layout/sidebar";
export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen overflow-y-hidden w-full">
      <Navbar />
   
      <div className="flex h-full">
        <Sidebar />
        <div className="w-full overflow-y-scroll mt-3">
          {children}
        </div>
      </div>
    </div>
  );
}
