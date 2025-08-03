import Navbar from "../navbar/navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-2 h-screen bg-white dark:bg-black flex w-full">
      <Navbar />
      {children}
    </div>
  );
}
