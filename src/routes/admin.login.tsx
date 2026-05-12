import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneShell } from "@/components/PhoneShell";
import { Lock } from "lucide-react";
import { Field } from "@/routes/login";

export const Route = createFileRoute("/admin/login")({ component: AdminLogin });

function AdminLogin() {
  return (
    <PhoneShell bg="bg-[var(--primary-deep)]">
      <div className="flex-1 flex flex-col items-center px-6 pt-12">
        <div className="h-20 w-20 rounded-2xl bg-white/15 flex items-center justify-center mb-4">
          <Lock className="h-10 w-10 text-white" />
        </div>
        <div className="w-full bg-card rounded-3xl p-6 mt-4">
          <h1 className="text-xl font-bold text-center">Admin Login</h1>
          <p className="text-xs text-center text-muted-foreground mb-6">Welcome back! Please login to continue</p>
          <Field label="Email" placeholder="admin@app.com" />
          <Field label="Password" placeholder="••••••••" type="password" />
          <div className="flex items-center justify-between text-xs mb-5">
            <label className="flex items-center gap-2 text-muted-foreground"><input type="checkbox" className="accent-[var(--primary)]" /> Remember me</label>
            <span className="text-primary">Forgot Password?</span>
          </div>
          <Link to="/admin/dashboard" className="block w-full text-center bg-primary text-primary-foreground rounded-xl py-3 font-semibold">Login</Link>
        </div>
      </div>
    </PhoneShell>
  );
}
