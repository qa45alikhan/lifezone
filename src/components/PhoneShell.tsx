import { ReactNode } from "react";

export function PhoneShell({ children, bg = "bg-background" }: { children: ReactNode; bg?: string }) {
  return (
    <div className={`phone-frame ${bg} flex flex-col`}>
      <StatusBar />
      {children}
    </div>
  );
}

export function StatusBar({ light = false }: { light?: boolean }) {
  const c = light ? "text-white" : "text-foreground";
  return (
    <div className={`flex items-center justify-between px-5 pt-2 pb-1 text-[12px] font-semibold ${c}`}>
      <span>9:30</span>
      <div className="flex items-center gap-1">
        <span>●●●</span>
        <span>▮</span>
      </div>
    </div>
  );
}
