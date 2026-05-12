import { createFileRoute } from "@tanstack/react-router";
import { PhoneShell } from "@/components/PhoneShell";
import { TopBar } from "@/components/TopBar";
import { AdminBottomNav } from "@/components/BottomNav";
import { Search, ShieldCheck, UserPlus, Package, FileCheck, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/admin/logs")({ component: AdminLogs });

const logs = [
  { Icon: ShieldCheck, text: "Admin login", sub: "By Ahsan", time: "2 min ago" },
  { Icon: UserPlus, text: "User registered", sub: "Fatima Noor", time: "10 min ago" },
  { Icon: Package, text: "Item added", sub: "iPhone 14", time: "1 hr ago" },
  { Icon: FileCheck, text: "Claim verified", sub: "Black Wallet", time: "2 hr ago" },
  { Icon: MessageSquare, text: "Feedback received", sub: "By Bilal Ahmed", time: "3 hr ago" },
];

function AdminLogs() {
  return (
    <PhoneShell>
      <TopBar title="System Logs" back="/admin/dashboard" right={<Search className="h-5 w-5" />} />
      <div className="px-5 space-y-2 flex-1">
        {logs.map((l, i) => (
          <div key={i} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
            <span className="h-9 w-9 rounded-full bg-primary-soft flex items-center justify-center"><l.Icon className="h-4 w-4 text-primary" /></span>
            <div className="flex-1">
              <div className="text-sm font-semibold">{l.text}</div>
              <div className="text-[11px] text-muted-foreground">{l.sub}</div>
            </div>
            <div className="text-[10px] text-muted-foreground">{l.time}</div>
          </div>
        ))}
      </div>
      <AdminBottomNav />
    </PhoneShell>
  );
}
