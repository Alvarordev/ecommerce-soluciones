import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={cn("max-w-7xl w-full mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
