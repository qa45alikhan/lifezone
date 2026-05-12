import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneShell } from "@/components/PhoneShell";
import { TopBar } from "@/components/TopBar";
import { BottomNav } from "@/components/BottomNav";
import { Star } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/feedback")({ component: Feedback });

function Feedback() {
  const [rating, setRating] = useState(4);
  return (
    <PhoneShell>
      <TopBar title="Send Feedback" back="/profile" />
      <div className="px-5 flex-1 pb-4">
        <p className="text-xs text-muted-foreground mb-4">We value your feedback</p>
        <div className="rounded-2xl bg-primary-soft h-36 flex items-center justify-center mb-5">
          <div className="flex gap-1">{[...Array(5)].map((_,i)=>(<Star key={i} className="h-8 w-8 fill-warning text-warning" />))}</div>
        </div>
        <label className="text-xs font-medium">Your Feedback</label>
        <textarea rows={4} placeholder="Write your feedback..." className="mt-1 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none mb-5" />
        <div className="text-xs font-medium mb-2">How would you rate our app?</div>
        <div className="flex gap-2 justify-center mb-6">
          {[1,2,3,4,5].map(n => (
            <button key={n} onClick={() => setRating(n)}>
              <Star className={`h-7 w-7 ${n<=rating ? "fill-warning text-warning" : "text-muted-foreground"}`} />
            </button>
          ))}
        </div>
        <Link to="/profile" className="block w-full text-center bg-primary text-primary-foreground rounded-xl py-3 font-semibold">Submit</Link>
      </div>
      <BottomNav />
    </PhoneShell>
  );
}
