import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneShell } from "@/components/PhoneShell";
import { TopBar } from "@/components/TopBar";
import { BottomNav } from "@/components/BottomNav";
import { FileText, MessageSquare, Eye } from "lucide-react";

export const Route = createFileRoute("/dashboard")({ component: Dashboard });

function Dashboard() {
  return (
    <PhoneShell>
      <TopBar title="Hi, Ahsan! 👋" />
      <div className="px-5 -mt-1 mb-4 text-sm text-muted-foreground">Here's what's happening today</div>
      <div className="px-5 grid grid-cols-2 gap-3 mb-5">
        <StatCard label="My Lost Items" value="2" />
        <StatCard label="My Found Items" value="3" />
        <StatCard label="My Claims" value="1" />
        <StatCard label="Messages" value="4" />
      </div>
      <div className="px-5 mb-2 font-semibold text-sm">Recent Activities</div>
      <div className="px-5 space-y-2 flex-1">
        <Activity Icon={FileText} text={<>Your item 'Black Wallet' is verified</>} time="2 min ago" />
        <Activity Icon={MessageSquare} text={<>New message from Fatima Noor</>} time="1 hr ago" />
        <Activity Icon={Eye} text={<>Your item 'iPhone 14' is viewed</>} time="3 hr ago" />
      </div>
      <BottomNav />
    </PhoneShell>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <Link to="/lost" className="rounded-2xl bg-primary-soft p-4">
      <div className="text-xs text-foreground/70 mb-1">{label}</div>
      <div className="text-2xl font-bold text-primary">{value}</div>
    </Link>
  );
}

function Activity({ Icon, text, time }: { Icon: typeof FileText; text: React.ReactNode; time: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
      <span className="h-8 w-8 rounded-full bg-primary-soft flex items-center justify-center"><Icon className="h-4 w-4 text-primary" /></span>
      <div className="flex-1 text-xs">{text}</div>
      <div className="text-[10px] text-muted-foreground">{time}</div>
    </div>
  );
}
