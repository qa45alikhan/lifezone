import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneShell } from "@/components/PhoneShell";
import { BottomNav } from "@/components/BottomNav";
import { ChevronRight, QrCode } from "lucide-react";

export const Route = createFileRoute("/profile")({ component: Profile });

const items = [
  { label: "Edit Profile", to: "/profile" },
  { label: "My Items", to: "/lost" },
  { label: "My Claims", to: "/claims" },
  { label: "Settings", to: "/profile" },
  { label: "Logout", to: "/login" },
];

function Profile() {
  return (
    <PhoneShell>
      <div className="bg-[var(--primary-deep)] text-white px-5 pt-10 pb-16 rounded-b-3xl">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center font-bold">AA</div>
          <div>
            <div className="font-semibold">Ahsan Ali</div>
            <div className="text-xs text-white/70">ahsana@gmail.com</div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 flex items-center justify-center">
          <QrCode className="h-24 w-24 text-foreground" />
        </div>
      </div>
      <div className="px-5 -mt-4 flex-1">
        <div className="bg-card rounded-2xl border border-border divide-y divide-border shadow-sm">
          {items.map(i => (
            <Link key={i.label} to={i.to} className="flex items-center justify-between px-4 py-3 text-sm">
              <span>{i.label}</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          ))}
        </div>
        <Link to="/feedback" className="block text-center text-xs text-primary mt-4">Send Feedback</Link>
      </div>
      <BottomNav />
    </PhoneShell>
  );
}
