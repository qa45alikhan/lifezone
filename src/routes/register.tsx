import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneShell } from "@/components/PhoneShell";
import { Field } from "./login";

export const Route = createFileRoute("/register")({ component: Register });

function Register() {
  return (
    <PhoneShell>
      <div className="flex-1 px-6 pt-8 pb-6">
        <h1 className="text-2xl font-bold">Create Account</h1>
        <p className="text-sm text-muted-foreground mb-6">Sign up to get started</p>
        <Field label="Full Name" placeholder="Ahsan Ali" />
        <Field label="Email" placeholder="ahsana@gmail.com" />
        <Field label="Password" placeholder="••••••••" type="password" />
        <Field label="Confirm Password" placeholder="••••••••" type="password" />
        <label className="flex items-start gap-2 text-xs text-muted-foreground mb-5"><input type="checkbox" className="mt-0.5 accent-[var(--primary)]" /> I agree to the <span className="text-primary">Terms &amp; Conditions</span></label>
        <Link to="/home" className="block w-full text-center bg-primary text-primary-foreground rounded-xl py-3 font-semibold">Register</Link>
        <p className="text-center text-xs mt-5 text-muted-foreground">Already have an account? <Link to="/login" className="text-primary font-semibold">Login</Link></p>
      </div>
    </PhoneShell>
  );
}
