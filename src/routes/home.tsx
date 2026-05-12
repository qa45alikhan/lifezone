import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneShell } from "@/components/PhoneShell";
import { BottomNav } from "@/components/BottomNav";
import { Search, FileText, Smartphone, Wallet, Plus } from "lucide-react";

export const Route = createFileRoute("/home")({ component: Home });

function Home() {
  return (
    <PhoneShell>
      <div className="flex-1 px-5 pt-2 pb-4">
        <div className="flex items-center justify-between mb-1">
          <h1 className="text-xl font-bold">Hi, Ahsan! 👋</h1>
          <Plus className="h-5 w-5 text-foreground" />
        </div>
        <p className="text-sm text-muted-foreground mb-5">What are you looking for?</p>
        <div className="grid grid-cols-2 gap-3 mb-5">
          <Link to="/lost" className="rounded-2xl bg-primary p-4 text-primary-foreground flex flex-col gap-2 shadow-[var(--shadow-card)]">
            <Search className="h-5 w-5" />
            <span className="font-semibold">Lost<br/>Items</span>
          </Link>
          <Link to="/found" className="rounded-2xl bg-primary p-4 text-primary-foreground flex flex-col gap-2 shadow-[var(--shadow-card)]">
            <Search className="h-5 w-5" />
            <span className="font-semibold">Found<br/>Items</span>
          </Link>
        </div>
        <div className="space-y-3 mb-6">
          <Link to="/report-lost" className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
            <span className="h-8 w-8 rounded-full bg-primary-soft flex items-center justify-center"><FileText className="h-4 w-4 text-primary" /></span>
            <span className="font-medium text-sm">Report Lost Item</span>
          </Link>
          <Link to="/report-found" className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
            <span className="h-8 w-8 rounded-full bg-primary-soft flex items-center justify-center"><FileText className="h-4 w-4 text-primary" /></span>
            <span className="font-medium text-sm">Report Found Item</span>
          </Link>
        </div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-sm">Recent Items</h2>
          <Link to="/lost" className="text-xs text-primary">For You</Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <RecentCard name="iPhone 14" status="Found" Icon={Smartphone} />
          <RecentCard name="Black Wallet" status="Lost" Icon={Wallet} />
        </div>
      </div>
      <BottomNav />
    </PhoneShell>
  );
}

function RecentCard({ name, status, Icon }: { name: string; status: "Lost" | "Found"; Icon: typeof Smartphone }) {
  const statusColor = status === "Found" ? "text-success" : "text-destructive";
  return (
    <Link to="/item/$id" params={{ id: name }} className="rounded-xl border border-border bg-card p-3">
      <div className="h-16 rounded-lg bg-muted flex items-center justify-center mb-2"><Icon className="h-7 w-7 text-muted-foreground" /></div>
      <div className="text-xs font-semibold">{name}</div>
      <div className={`text-[10px] font-semibold ${statusColor}`}>● {status}</div>
    </Link>
  );
}
