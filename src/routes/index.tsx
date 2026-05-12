import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import { PhoneShell } from "@/components/PhoneShell";
import { Package, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({ component: Splash });

function Splash() {
  const nav = useNavigate();
  useEffect(() => {
    const t = setTimeout(() => nav({ to: "/login" }), 1800);
    return () => clearTimeout(t);
  }, [nav]);
  return (
    <PhoneShell bg="bg-[var(--primary-deep)]">
      <div className="flex-1 flex flex-col items-center justify-center px-8 text-white relative overflow-hidden">
        <Sparkles className="absolute top-24 left-10 h-5 w-5 opacity-40" />
        <Sparkles className="absolute top-40 right-12 h-4 w-4 opacity-50" />
        <Sparkles className="absolute bottom-40 left-16 h-3 w-3 opacity-40" />
        <div className="h-32 w-32 rounded-3xl bg-white/10 backdrop-blur flex items-center justify-center mb-8 shadow-2xl">
          <Package className="h-16 w-16 text-white" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Lost &amp; Found</h1>
        <p className="text-white/70 text-center text-sm">Reuniting lost items with<br/>their owners</p>
        <div className="mt-12 h-10 w-10 rounded-full border-2 border-white/30 border-t-white animate-spin" />
        <Link to="/login" className="absolute bottom-8 text-xs text-white/60">Tap to continue</Link>
      </div>
    </PhoneShell>
  );
}
