import Sidebar from "@/components/Sidebar";

export default function SubpagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col px-12 py-12 lg:px-16 lg:py-14">
      <div className="flex flex-1 flex-col lg:flex-row gap-12 lg:gap-24">
        <Sidebar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
