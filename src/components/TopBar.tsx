import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { ReactNode } from "react";

export function TopBar({
  title,
  back,
  right,
  light = false,
}: {
  title: string;
  back?: string;
  right?: ReactNode;
  light?: boolean;
}) {
  const text = light ? "text-white" : "text-foreground";
  return (
    <div className={`flex items-center gap-3 px-4 py-3 ${text}`}>
      {back && (
        <Link to={back} className="-ml-1 p-1">
          <ArrowLeft className="h-5 w-5" />
        </Link>
      )}
      <h1 className="flex-1 text-base font-semibold">{title}</h1>
      {right}
    </div>
  );
}
