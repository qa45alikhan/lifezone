import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneShell } from "@/components/PhoneShell";
import { AdminBottomNav } from "@/components/BottomNav";
import { ChevronRight } from "lucide-react";

export const Route = createFileRoute("/admin/profile")({ component: AdminProfile });

const items = [
  { label: "System Logs", to: "/admin/logs" },
  { label: "Reports & Analytics", to: "/admin/reports" },
  { label: "Verify Claims", to: "/admin/claims" },
  { label: "Settings", to: "/admin/profile" },
  { label: "Logout", to: "/login" },
];

function AdminProfile() {
  return (
    <PhoneShell>
      <div className="bg-[var(--primary-deep)] text-white px-5 pt-10 pb-12 rounded-b-3xl">
        <div className="flex items-center gap-3">
          <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center font-bold">AD</div>
          <div>
            <div className="font-semibold">Admin</div>
            <div className="text-xs text-white/70">admin@app.com</div>
          </div>
        </div>
      </div>
      <div className="px-5 -mt-4 flex-1">
        <div className="bg-card rounded-2xl border border-border divide-y divide-border shadow-sm">
          {items.map(i => (
            <Link key={i.label} to={i.to} className="flex items-center justify-between px-4 py-3 text-sm">
              <span>{i.label}</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          ))}
        </div>
      </div>
      <AdminBottomNav />
    </PhoneShell>
  );
}
