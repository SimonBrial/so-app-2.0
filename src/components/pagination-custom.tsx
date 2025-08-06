import {
  ChevronsRight,
  ChevronsLeft,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import {
  PaginationContent,
  PaginationItem,
  PaginationLink,
  Pagination,
} from "./ui/pagination";

export default function PaginationCustom() {
  return (
    <Pagination className="flex justify-end">
      <PaginationContent className="flex gap-2">
        <PaginationItem>
          <PaginationLink href="#" size={undefined}>
            <ChevronsLeft />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive size={undefined}>
            <ChevronLeft />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          {/* <PaginationLink href="#" size={undefined}>
              <ChevronLeft />
            </PaginationLink> */}
          1/10
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive size={undefined}>
            <ChevronRight />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" size={undefined}>
            <ChevronsRight />
          </PaginationLink>
        </PaginationItem>
        {/* 
          <PaginationItem>
            <PaginationNext href="#" size={undefined} />
          </PaginationItem> */}
      </PaginationContent>
    </Pagination>
  );
}
