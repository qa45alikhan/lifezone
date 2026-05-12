import { createFileRoute } from "@tanstack/react-router";
import { PhoneShell } from "@/components/PhoneShell";
import { TopBar } from "@/components/TopBar";
import { BottomNav } from "@/components/BottomNav";
import { Smartphone, Wallet, Backpack } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/claims")({ component: Claims });

const tabs = ["All", "Pending", "Verified", "Rejected"] as const;
const claims = [
  { id: "#125", item: "iPhone 14", status: "Pending" as const, time: "2 min ago", Icon: Smartphone },
  { id: "#124", item: "Black Wallet", status: "Verified" as const, time: "1 hr ago", Icon: Wallet },
  { id: "#123", item: "School Bag", status: "Rejected" as const, time: "3 hr ago", Icon: Backpack },
];

function Claims() {
  const [tab, setTab] = useState<typeof tabs[number]>("All");
  const filtered = tab === "All" ? claims : claims.filter(c => c.status === tab);
  return (
    <PhoneShell>
      <TopBar title="My Claims" back="/home" />
      <div className="px-5 flex gap-2 mb-3">
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)} className={`px-3 py-1.5 rounded-full text-xs font-semibold ${tab===t ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>{t}</button>
        ))}
      </div>
      <div className="px-5 space-y-2 flex-1">
        {filtered.map(c => (
          <div key={c.id} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
            <span className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center"><c.Icon className="h-5 w-5 text-foreground/60" /></span>
            <div className="flex-1">
              <div className="text-sm font-semibold">Claim {c.id}</div>
              <div className="text-xs text-muted-foreground">{c.item}</div>
              <div className={`text-[11px] font-semibold ${c.status==="Verified"?"text-success":c.status==="Rejected"?"text-destructive":"text-warning"}`}>{c.status}</div>
            </div>
            <div className="text-[10px] text-muted-foreground">{c.time}</div>
          </div>
        ))}
      </div>
      <BottomNav />
    </PhoneShell>
  );
}
