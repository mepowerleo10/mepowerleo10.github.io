import { cn } from "@/lib/utils";
import { Loader, LoaderCircle } from "lucide-react";

export const Spinner = ({ className }: { className?: string }) => {
  return (
    <LoaderCircle className={cn("animate-spin text-primary", className)} />
  );
};
