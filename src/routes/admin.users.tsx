import { createFileRoute } from "@tanstack/react-router";
import { PhoneShell } from "@/components/PhoneShell";
import { TopBar } from "@/components/TopBar";
import { AdminBottomNav } from "@/components/BottomNav";
import { Plus, Search } from "lucide-react";

export const Route = createFileRoute("/admin/users")({ component: AdminUsers });

const users = [
  { name: "Ahsan Ali", email: "ahsan@gmail.com", status: "Active" },
  { name: "Fatima Noor", email: "fatima@gmail.com", status: "Active" },
  { name: "Bilal Ahmed", email: "bilal@gmail.com", status: "Inactive" },
  { name: "Zainab Khan", email: "zainab@gmail.com", status: "Active" },
  { name: "Hammad Raza", email: "hammad@gmail.com", status: "Active" },
];

function AdminUsers() {
  return (
    <PhoneShell>
      <TopBar title="Manage Users" back="/admin/dashboard" right={<Plus className="h-5 w-5" />} />
      <div className="px-5 mb-3">
        <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input placeholder="Search users..." className="flex-1 bg-transparent text-sm outline-none" />
        </div>
      </div>
      <div className="px-5 space-y-2 flex-1">
        {users.map(u => (
          <div key={u.email} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
            <div className="h-10 w-10 rounded-full bg-primary-soft flex items-center justify-center font-bold text-primary text-xs">{u.name.split(" ").map(s=>s[0]).join("")}</div>
            <div className="flex-1">
              <div className="text-sm font-semibold">{u.name}</div>
              <div className="text-[11px] text-muted-foreground">{u.email}</div>
            </div>
            <span className={`text-[10px] font-semibold ${u.status==="Active"?"text-success":"text-destructive"}`}>● {u.status}</span>
          </div>
        ))}
      </div>
      <AdminBottomNav />
    </PhoneShell>
  );
}
