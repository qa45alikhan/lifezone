import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneShell } from "@/components/PhoneShell";
import { TopBar } from "@/components/TopBar";
import { Smartphone, X } from "lucide-react";

export const Route = createFileRoute("/item/$id")({ component: ItemDetail });

function ItemDetail() {
  const { id } = Route.useParams();
  return (
    <PhoneShell>
      <div className="relative">
        <div className="h-56 bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
          <Smartphone className="h-24 w-24 text-foreground/30" />
        </div>
        <Link to="/found" className="absolute top-3 left-3 h-9 w-9 rounded-full bg-card/80 backdrop-blur flex items-center justify-center">‹</Link>
        <Link to="/found" className="absolute top-3 right-3 h-9 w-9 rounded-full bg-card/80 backdrop-blur flex items-center justify-center"><X className="h-4 w-4" /></Link>
      </div>
      <div className="px-5 py-4 flex-1">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-lg font-bold">{id}</h1>
          <div className="text-right">
            <div className="text-xs text-success font-semibold">● Found</div>
            <div className="text-[10px] text-muted-foreground">1 hr ago</div>
          </div>
        </div>
        <Row label="Description" value="Found near the university gate." />
        <Row label="Category" value="Electronics" />
        <Row label="Location" value="University Gate" />
        <Row label="Contact" value="Ahsan Ali" />
        <div className="flex gap-3 mt-6">
          <Link to="/chat" className="flex-1 rounded-xl border border-primary text-primary text-center py-3 font-semibold">Chat</Link>
          <Link to="/claims" className="flex-1 rounded-xl bg-primary text-primary-foreground text-center py-3 font-semibold">Claim Item</Link>
        </div>
      </div>
    </PhoneShell>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-border py-3 text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
