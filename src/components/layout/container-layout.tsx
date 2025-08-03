export default function ContainerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[8px] w-full p-4 bg-white dark:bg-[#111111] border- border--red-500">
      {children}
    </div>
  );
}
