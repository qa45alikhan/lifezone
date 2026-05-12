import { createFileRoute } from "@tanstack/react-router";
import { PhoneShell } from "@/components/PhoneShell";
import { TopBar } from "@/components/TopBar";
import { AdminBottomNav } from "@/components/BottomNav";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/admin/reports")({ component: AdminReports });

const cats = [
  { label: "Electronics", val: "45%", color: "bg-primary" },
  { label: "Bags", val: "25%", color: "bg-info" },
  { label: "Documents", val: "15%", color: "bg-warning" },
  { label: "Others", val: "15%", color: "bg-success" },
];

function AdminReports() {
  return (
    <PhoneShell>
      <TopBar title="Reports & Analytics" back="/admin/dashboard" />
      <div className="px-5 pb-4 flex-1">
        <div className="flex items-center gap-2 text-xs font-semibold mb-3"><span>‹</span> May 1 - May 31, 2024 <ChevronDown className="h-3 w-3" /></div>
        <div className="rounded-2xl bg-card border border-border p-4 mb-4">
          <svg viewBox="0 0 200 80" className="w-full h-24">
            <polyline fill="none" stroke="oklch(0.55 0.22 295)" strokeWidth="2" points="0,60 30,50 60,55 90,30 120,40 150,20 180,25 200,15" />
            <polyline fill="oklch(0.55 0.22 295 / 0.15)" stroke="none" points="0,60 30,50 60,55 90,30 120,40 150,20 180,25 200,15 200,80 0,80" />
          </svg>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <Stat label="Total Items" value="568" trend="+23%" />
          <Stat label="Found Items" value="320" trend="+18%" />
          <Stat label="Lost Items" value="248" trend="+15%" />
          <Stat label="Total Claims" value="145" trend="+20%" />
        </div>
        <div className="rounded-2xl bg-card border border-border p-4">
          <div className="text-sm font-semibold mb-3">Items by Category</div>
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20 rounded-full" style={{background:"conic-gradient(oklch(0.55 0.22 295) 0 45%, oklch(0.65 0.15 230) 45% 70%, oklch(0.78 0.15 75) 70% 85%, oklch(0.65 0.16 150) 85% 100%)"}}>
              <div className="absolute inset-3 rounded-full bg-card" />
            </div>
            <div className="flex-1 space-y-1">
              {cats.map(c=>(<div key={c.label} className="flex items-center justify-between text-[11px]"><span className="flex items-center gap-1.5"><span className={`h-2 w-2 rounded-full ${c.color}`} />{c.label}</span><span className="font-semibold">{c.val}</span></div>))}
            </div>
          </div>
        </div>
      </div>
      <AdminBottomNav />
    </PhoneShell>
  );
}

function Stat({ label, value, trend }: { label: string; value: string; trend: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-3">
      <div className="text-[10px] text-muted-foreground">{label}</div>
      <div className="text-lg font-bold">{value}</div>
      <div className="text-[10px] text-success font-semibold">{trend}</div>
    </div>
  );
}
