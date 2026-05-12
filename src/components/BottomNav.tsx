import { Link, useLocation } from "@tanstack/react-router";
import { Home, Search, Plus, MessageCircle, User, LayoutGrid, Package, Users, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type NavItem = { to: string; icon: LucideIcon; primary?: boolean };

function Nav({ items, plusTo }: { items: NavItem[]; plusTo: string }) {
  const { pathname } = useLocation();
  return (
    <div className="sticky bottom-0 left-0 right-0 mt-auto bg-card border-t border-border">
      <div className="relative flex items-center justify-around px-3 py-2">
        {items.map(({ to, icon: Icon }) => {
          const active = pathname === to;
          return (
            <Link key={to} to={to} className={`p-2 ${active ? "text-primary" : "text-muted-foreground"}`}>
              <Icon className="h-5 w-5" />
            </Link>
          );
        })}
        <Link
          to={plusTo}
          className="absolute left-1/2 -top-5 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
        >
          <Plus className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
}

export function BottomNav() {
  return (
    <Nav
      plusTo="/report-lost"
      items={[
        { to: "/home", icon: Home },
        { to: "/lost", icon: Search },
        { to: "/chat", icon: MessageCircle },
        { to: "/profile", icon: User },
      ]}
    />
  );
}

export function AdminBottomNav() {
  return (
    <Nav
      plusTo="/admin/items"
      items={[
        { to: "/admin/dashboard", icon: LayoutGrid },
        { to: "/admin/users", icon: Users },
        { to: "/admin/feedback", icon: MessageCircle },
        { to: "/admin/reports", icon: BarChart3 },
      ]}
    />
  );
}
