import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneShell } from "@/components/PhoneShell";
import { TopBar } from "@/components/TopBar";
import { BottomNav } from "@/components/BottomNav";
import { Plus, Search, Smartphone, Key, Laptop, GlassWater } from "lucide-react";

export const Route = createFileRoute("/found")({ component: FoundItems });

const items = [
  { name: "iPhone 14", time: "1 hr ago", Icon: Smartphone },
  { name: "Keys", time: "5 hr ago", Icon: Key },
  { name: "Laptop", time: "1 day ago", Icon: Laptop },
  { name: "Water Bottle", time: "2 days ago", Icon: GlassWater },
];

function FoundItems() {
  return (
    <PhoneShell>
      <TopBar title="Found Items" back="/home" right={<Plus className="h-5 w-5" />} />
      <div className="px-5 mb-3">
        <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input placeholder="Search found items..." className="flex-1 bg-transparent text-sm outline-none" />
        </div>
      </div>
      <div className="px-5 space-y-2 flex-1">
        {items.map(({ name, time, Icon }) => (
          <Link to="/item/$id" params={{ id: name }} key={name} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
            <span className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center"><Icon className="h-5 w-5 text-foreground/60" /></span>
            <div className="flex-1">
              <div className="text-sm font-semibold">{name}</div>
              <div className="text-[11px] text-success font-semibold">● Found</div>
            </div>
            <div className="text-[10px] text-muted-foreground">{time}</div>
          </Link>
        ))}
      </div>
      <BottomNav />
    </PhoneShell>
  );
}
