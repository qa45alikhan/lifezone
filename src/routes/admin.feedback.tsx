import { createFileRoute } from "@tanstack/react-router";
import { PhoneShell } from "@/components/PhoneShell";
import { TopBar } from "@/components/TopBar";
import { AdminBottomNav } from "@/components/BottomNav";
import { Star, Plus } from "lucide-react";

export const Route = createFileRoute("/admin/feedback")({ component: AdminFeedback });

const fb = [
  { name: "Ahsan Ali", text: "Great app! Helped me a lot.", time: "3 hr ago", rating: 5 },
  { name: "Fatima Noor", text: "Very easy to use.", time: "5 hr ago", rating: 5 },
  { name: "Bilal Ahmed", text: "Need more filters in search.", time: "5 hr ago", rating: 4 },
  { name: "Zainab Khan", text: "Amazing support!", time: "5 hr ago", rating: 5 },
];

function AdminFeedback() {
  return (
    <PhoneShell>
      <TopBar title="User Feedback" back="/admin/dashboard" right={<Plus className="h-5 w-5" />} />
      <div className="px-5 space-y-2 flex-1">
        {fb.map((f,i) => (
          <div key={i} className="flex items-start gap-3 rounded-xl border border-border bg-card p-3">
            <div className="h-10 w-10 rounded-full bg-primary-soft flex items-center justify-center font-bold text-primary text-xs">{f.name.split(" ").map(s=>s[0]).join("")}</div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div className="text-sm font-semibold">{f.name}</div>
                <div className="text-[10px] text-muted-foreground">{f.time}</div>
              </div>
              <div className="text-xs text-muted-foreground mb-1">{f.text}</div>
              <div className="flex gap-0.5">{[...Array(5)].map((_,j)=>(<Star key={j} className={`h-3 w-3 ${j<f.rating?"fill-warning text-warning":"text-muted"}`} />))}</div>
            </div>
          </div>
        ))}
      </div>
      <AdminBottomNav />
    </PhoneShell>
  );
}
