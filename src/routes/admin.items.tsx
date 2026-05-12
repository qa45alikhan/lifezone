import { createFileRoute } from "@tanstack/react-router";
import { PhoneShell } from "@/components/PhoneShell";
import { TopBar } from "@/components/TopBar";
import { AdminBottomNav } from "@/components/BottomNav";
import { Wallet, Smartphone, Backpack, Key, Watch, RefreshCw } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/admin/items")({ component: AdminItems });

const tabs = ["All", "Lost", "Found"] as const;
const items = [
  { name: "Black Wallet", status: "Lost", time: "2 min ago", Icon: Wallet },
  { name: "iPhone 14", status: "Found", time: "1 hr ago", Icon: Smartphone },
  { name: "School Bag", status: "Lost", time: "3 hr ago", Icon: Backpack },
  { name: "Keys", status: "Found", time: "5 hr ago", Icon: Key },
  { name: "Watch", status: "Lost", time: "1 day ago", Icon: Watch },
];

function AdminItems() {
  const [tab, setTab] = useState<typeof tabs[number]>("All");
  const filtered = tab === "All" ? items : items.filter(i => i.status === tab);
  return (
    <PhoneShell>
      <TopBar title="Manage Items" back="/admin/dashboard" right={<RefreshCw className="h-5 w-5" />} />
      <div className="px-5 flex gap-2 mb-3">
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)} className={`px-4 py-1.5 rounded-full text-xs font-semibold ${tab===t?"bg-primary text-primary-foreground":"bg-muted text-muted-foreground"}`}>{t}</button>
        ))}
      </div>
      <div className="px-5 space-y-2 flex-1">
        {filtered.map(i => (
          <div key={i.name} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
            <span className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center"><i.Icon className="h-5 w-5 text-foreground/60" /></span>
            <div className="flex-1">
              <div className="text-sm font-semibold">{i.name}</div>
              <div className={`text-[11px] font-semibold ${i.status==="Found"?"text-success":"text-destructive"}`}>● {i.status}</div>
            </div>
            <div className="text-[10px] text-muted-foreground">{i.time}</div>
          </div>
        ))}
      </div>
      <AdminBottomNav />
    </PhoneShell>
  );
}
