import { createFileRoute } from "@tanstack/react-router";
import { PhoneShell } from "@/components/PhoneShell";
import { TopBar } from "@/components/TopBar";
import { AdminBottomNav } from "@/components/BottomNav";
import { Users, Package, Clock, FileCheck, UserPlus, FileText, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/admin/dashboard")({ component: AdminDashboard });

function AdminDashboard() {
  return (
    <PhoneShell>
      <TopBar title="Admin Dashboard" />
      <div className="px-5 grid grid-cols-2 gap-3 mb-5">
        <Stat Icon={Users} value="1,248" label="Total Users" />
        <Stat Icon={Package} value="568" label="Total Items" />
        <Stat Icon={Clock} value="24" label="Pending Items" />
        <Stat Icon={FileCheck} value="36" label="Total Reports" />
      </div>
      <div className="px-5 mb-2 font-semibold text-sm">Recent Activity</div>
      <div className="px-5 space-y-2 flex-1">
        <Act Icon={UserPlus} text="New user registered" time="2 min ago" />
        <Act Icon={Package} text="New item reported" time="10 min ago" />
        <Act Icon={FileText} text="Claim request submitted" time="25 min ago" />
        <Act Icon={MessageSquare} text="Feedback received" time="1 hr ago" />
      </div>
      <AdminBottomNav />
    </PhoneShell>
  );
}

function Stat({ Icon, value, label }: { Icon: typeof Users; value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-primary-soft p-4 flex items-center gap-3">
      <span className="h-10 w-10 rounded-full bg-primary/15 flex items-center justify-center"><Icon className="h-5 w-5 text-primary" /></span>
      <div>
        <div className="text-lg font-bold">{value}</div>
        <div className="text-[10px] text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}

function Act({ Icon, text, time }: { Icon: typeof Users; text: string; time: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
      <span className="h-8 w-8 rounded-full bg-primary-soft flex items-center justify-center"><Icon className="h-4 w-4 text-primary" /></span>
      <div className="flex-1 text-xs">{text}</div>
      <div className="text-[10px] text-muted-foreground">{time}</div>
    </div>
  );
}
