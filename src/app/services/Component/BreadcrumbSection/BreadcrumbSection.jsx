import { Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function BreadcrumbSection({ dynamicPage }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>{/* <Slash /> */}/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Services</BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator>{/* <Slash /> */}/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>{dynamicPage}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
