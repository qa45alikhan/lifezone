import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneShell } from "@/components/PhoneShell";
import { TopBar } from "@/components/TopBar";
import { ImagePlus } from "lucide-react";
import { Field } from "./login";

export const Route = createFileRoute("/report-lost")({ component: ReportLost });

function ReportLost() {
  return <ReportForm title="Report Lost Item" submitTo="/lost" />;
}

export function ReportForm({ title, submitTo }: { title: string; submitTo: string }) {
  return (
    <PhoneShell>
      <TopBar title={title} back="/home" />
      <div className="px-5 flex-1 pb-4">
        <div className="rounded-xl border-2 border-dashed border-border bg-card flex items-center gap-3 p-4 mb-4">
          <span className="h-12 w-12 rounded-lg bg-primary-soft flex items-center justify-center"><ImagePlus className="h-5 w-5 text-primary" /></span>
          <span className="text-sm font-medium">Add Photos</span>
        </div>
        <Field label="Item Name" placeholder="Enter item name" />
        <div className="mb-4">
          <label className="text-xs font-medium">Category</label>
          <select className="mt-1 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none">
            <option>Select category</option><option>Electronics</option><option>Bags</option><option>Documents</option>
          </select>
        </div>
        <Field label="Location" placeholder="Enter location" />
        <div className="mb-5">
          <label className="text-xs font-medium">Description</label>
          <textarea placeholder="Describe your item..." rows={3} className="mt-1 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none" />
        </div>
        <Link to={submitTo} className="block w-full text-center bg-primary text-primary-foreground rounded-xl py-3 font-semibold">Submit</Link>
      </div>
    </PhoneShell>
  );
}
