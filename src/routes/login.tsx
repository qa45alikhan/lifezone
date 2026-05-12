import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneShell } from "@/components/PhoneShell";
import { User2 } from "lucide-react";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  return (
    <PhoneShell>
      <div className="flex-1 px-6 pt-10 pb-6">
        <h1 className="text-2xl font-bold">Welcome Back!</h1>
        <p className="text-sm text-muted-foreground mb-8">Login to continue</p>
        <div className="flex justify-end -mt-12 mb-6">
          <div className="h-10 w-10 rounded-full bg-primary-soft flex items-center justify-center">
            <User2 className="h-5 w-5 text-primary" />
          </div>
        </div>
        <Field label="Email" placeholder="ahsan@gmail.com" />
        <Field label="Password" placeholder="••••••••" type="password" />
        <div className="flex items-center justify-between text-xs mt-2 mb-6">
          <label className="flex items-center gap-2 text-muted-foreground"><input type="checkbox" className="accent-[var(--primary)]" /> Remember me</label>
          <Link to="/login" className="text-primary font-medium">Forgot Password?</Link>
        </div>
        <Link to="/home" className="block w-full text-center bg-primary text-primary-foreground rounded-xl py-3 font-semibold">Login</Link>
        <div className="text-center text-xs text-muted-foreground my-5">Or continue with</div>
        <div className="flex items-center justify-center gap-4">
          {["G","","f"].map((s,i)=>(<div key={i} className="h-11 w-11 rounded-full border border-border flex items-center justify-center font-bold text-sm">{s||"🍎"}</div>))}
        </div>
        <p className="text-center text-xs mt-6 text-muted-foreground">Don't have an account? <Link to="/register" className="text-primary font-semibold">Register</Link></p>
        <p className="text-center text-xs mt-2 text-muted-foreground"><Link to="/admin/login" className="text-primary">Admin Login →</Link></p>
      </div>
    </PhoneShell>
  );
}

export function Field({ label, placeholder, type="text" }: { label: string; placeholder?: string; type?: string }) {
  return (
    <div className="mb-4">
      <label className="text-xs font-medium text-foreground/80">{label}</label>
      <input type={type} placeholder={placeholder} className="mt-1 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary" />
    </div>
  );
}
