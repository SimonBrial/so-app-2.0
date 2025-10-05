import { Separator } from "./ui/separator";

export default function SeparatorCustom({
  orientation,
}: {
  orientation?: "horizontal" | "vertical";
}) {
  return (
    <Separator
      orientation={orientation}
      className="my-2.5 bg-container-border dark:bg-container-border-dark"
    />
  );
}
