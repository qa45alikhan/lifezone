import { createFileRoute } from "@tanstack/react-router";
import { PhoneShell } from "@/components/PhoneShell";
import { TopBar } from "@/components/TopBar";
import { AdminBottomNav } from "@/components/BottomNav";
import { RefreshCw } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/admin/claims")({ component: AdminClaims });

const tabs = ["Pending", "Verified", "Rejected"] as const;
const claims = [
  { id: "#125", item: "iPhone 14", by: "Ahsan Ali", status: "Pending", time: "2 min ago" },
  { id: "#124", item: "Black Wallet", by: "Fatima Noor", status: "Pending", time: "1 hr ago" },
  { id: "#123", item: "School Bag", by: "Bilal Ahmed", status: "Pending", time: "3 hr ago" },
  { id: "#122", item: "Keys", by: "Zainab Khan", status: "Pending", time: "5 hr ago" },
];

function AdminClaims() {
  const [tab, setTab] = useState<typeof tabs[number]>("Pending");
  return (
    <PhoneShell>
      <TopBar title="Verify Claims" back="/admin/dashboard" right={<RefreshCw className="h-5 w-5" />} />
      <div className="px-5 flex gap-2 mb-3">
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)} className={`px-4 py-1.5 rounded-full text-xs font-semibold ${tab===t?"bg-primary text-primary-foreground":"bg-muted text-muted-foreground"}`}>{t}</button>
        ))}
      </div>
      <div className="px-5 space-y-2 flex-1">
        {claims.map(c => (
          <div key={c.id} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
            <div className="flex-1">
              <div className="text-sm font-semibold">Claim {c.id}</div>
              <div className="text-xs">{c.item}</div>
              <div className="text-[10px] text-muted-foreground">By {c.by}</div>
            </div>
            <div className="text-right">
              <button className="bg-primary text-primary-foreground rounded-full text-[10px] font-semibold px-3 py-1">Review</button>
              <div className="text-[10px] text-muted-foreground mt-1">{c.time}</div>
            </div>
          </div>
        ))}
      </div>
      <AdminBottomNav />
    </PhoneShell>
  );
}
