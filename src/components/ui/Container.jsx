import { cn } from "@utils/cn";

/**
 * Horizontal container with consistent gutters across the site.
 */
export default function Container({ as: Tag = "div", className, children, ...props }) {
  return (
    <Tag className={cn("container max-w-7xl", className)} {...props}>
      {children}
    </Tag>
  );
}
