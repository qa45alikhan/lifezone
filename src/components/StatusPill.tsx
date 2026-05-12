export function StatusPill({ status }: { status: "Lost" | "Found" | "Active" | "Inactive" | "Pending" | "Verified" | "Rejected" | "Review" }) {
  const map: Record<string, string> = {
    Lost: "bg-destructive/10 text-destructive",
    Found: "bg-success/15 text-success",
    Active: "bg-success/15 text-success",
    Inactive: "bg-destructive/10 text-destructive",
    Pending: "bg-warning/20 text-foreground/80",
    Verified: "bg-success/15 text-success",
    Rejected: "bg-destructive/10 text-destructive",
    Review: "bg-primary text-primary-foreground",
  };
  return <span className={`status-pill ${map[status]}`}>{status === "Found" || status === "Verified" || status === "Active" ? "● " : ""}{status}</span>;
}
