import { Link, useLocation } from "@tanstack/react-router";
import { Home, Search, Plus, MessageCircle, User } from "lucide-react";

type NavItem = { to: string; icon: typeof Home; primary?: boolean };

const items: NavItem[] = [
  { to: "/home", icon: Home },
  { to: "/lost", icon: Search },
  { to: "/report-lost", icon: Plus, primary: true },
  { to: "/chat", icon: MessageCircle },
  { to: "/profile", icon: User },
];

export function BottomNav() {
  const { pathname } = useLocation();
  return (
    <div className="sticky bottom-0 left-0 right-0 mt-auto bg-card border-t border-border">
      <div className="flex items-center justify-around px-3 py-2">
        {items.map(({ to, icon: Icon, primary }) => {
          const active = pathname === to;
          if (primary) {
            return (
              <Link key={to} to={to} className="-mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                <Icon className="h-6 w-6" />
              </Link>
            );
          }
          return (
            <Link key={to} to={to as string} className={`p-2 ${active ? "text-primary" : "text-muted-foreground"}`}>
              <Icon className="h-5 w-5" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function AdminBottomNav() {
  const { pathname } = useLocation();
  const adminItems = [
    { to: "/admin/dashboard", icon: Home },
    { to: "/admin/users", icon: Search },
    { to: "/admin/items", icon: Plus, primary: true },
    { to: "/admin/feedback", icon: MessageCircle },
    { to: "/admin/profile", icon: User },
  ] as const;
  return (
    <div className="sticky bottom-0 left-0 right-0 mt-auto bg-card border-t border-border">
      <div className="flex items-center justify-around px-3 py-2">
        {adminItems.map(({ to, icon: Icon, primary }) => {
          const active = pathname === to;
          if (primary) {
            return (
              <Link key={to} to={to} className="-mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                <Icon className="h-6 w-6" />
              </Link>
            );
          }
          return (
            <Link key={to} to={to} className={`p-2 ${active ? "text-primary" : "text-muted-foreground"}`}>
              <Icon className="h-5 w-5" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
