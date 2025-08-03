import { SlashIcon } from "lucide-react";
import {
  BreadcrumbSeparator,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  Breadcrumb,
} from "./ui/breadcrumb";
import type { HeaderSectionProps } from "../types/interface";

export default function HeaderSection({
  titleSection,
  title,
  ...props
}: HeaderSectionProps) {
  return (
    <Breadcrumb className="p-2">
      <BreadcrumbList className="text-xl text-light-text dark:text-white">
        <BreadcrumbItem>
          <props.icon className="size-[50px] text-branding-3 dark:text-branding-2 hover:text-branding-2 transition-all" />
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbPage className="text-xl text-light-text dark:text-white">
            {title}
          </BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage className="text-xl text-light-text dark:text-white">
            {titleSection}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
