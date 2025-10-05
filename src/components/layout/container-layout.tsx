export default function ContainerLayout({
  children,
  styles,
}: {
    children: React.ReactNode;
  styles?: string;
}) {
  return (
    <div className={`${styles} rounded-[8px] w-full p-4 bg-white dark:bg-[#111111] border- border--red-500`}>
      {children}
    </div>
  );
}
