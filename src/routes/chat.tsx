import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneShell } from "@/components/PhoneShell";
import { Phone, Video, Send, Smile } from "lucide-react";

export const Route = createFileRoute("/chat")({ component: Chat });

const msgs = [
  { from: "them", text: "Hi Ahsan, is this your iPhone?" },
  { from: "me", text: "Yes, it is! Thank you so much." },
  { from: "them", text: "You're welcome!" },
  { from: "me", text: "Where can we meet?" },
  { from: "them", text: "At the university gate?" },
  { from: "me", text: "Sure, see you there!" },
];

function Chat() {
  return (
    <PhoneShell>
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
        <Link to="/home" className="text-xl">‹</Link>
        <div className="h-9 w-9 rounded-full bg-primary-soft flex items-center justify-center font-bold text-primary text-sm">FN</div>
        <div className="flex-1">
          <div className="text-sm font-semibold">Fatima Noor</div>
          <div className="text-[10px] text-success">● Online</div>
        </div>
        <Phone className="h-4 w-4 text-primary" />
        <Video className="h-4 w-4 text-primary" />
      </div>
      <div className="flex-1 px-4 py-4 space-y-3 overflow-y-auto">
        {msgs.map((m, i) => (
          <div key={i} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"} items-end gap-2`}>
            {m.from === "them" && <div className="h-7 w-7 rounded-full bg-primary-soft" />}
            <div className={`max-w-[70%] rounded-2xl px-3 py-2 text-sm ${m.from === "me" ? "bg-primary text-primary-foreground rounded-br-sm" : "bg-muted rounded-bl-sm"}`}>{m.text}</div>
          </div>
        ))}
      </div>
      <div className="border-t border-border p-3 flex items-center gap-2">
        <Smile className="h-5 w-5 text-muted-foreground" />
        <input placeholder="Type a message..." className="flex-1 rounded-full bg-muted px-4 py-2 text-sm outline-none" />
        <button className="h-9 w-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center"><Send className="h-4 w-4" /></button>
      </div>
    </PhoneShell>
  );
}
