import { createFileRoute } from "@tanstack/react-router";
import { ReportForm } from "./report-lost";

export const Route = createFileRoute("/report-found")({
  component: () => <ReportForm title="Report Found Item" submitTo="/found" />,
});
