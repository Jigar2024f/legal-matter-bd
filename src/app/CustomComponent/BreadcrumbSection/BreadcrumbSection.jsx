import { Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function BreadcrumbSection({ pagePath, pageName, dynamicPage }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          {/* <Slash /> */}
          /
        </BreadcrumbSeparator>
        {!dynamicPage ? (
          <>
            <BreadcrumbItem>
              <BreadcrumbPage>{pageName}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        ) : (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${pagePath}`}>{pageName}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              {/* <Slash /> */}
              /
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>{dynamicPage}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
