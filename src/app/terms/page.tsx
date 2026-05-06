import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { loadLegalMarkdown } from "@/lib/legal";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Family Hub terms of service — the agreement between you and Wherk LLC for using the app.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  const source = loadLegalMarkdown("terms-of-service.md");
  return <LegalPage title="Terms of Service" source={source} />;
}
