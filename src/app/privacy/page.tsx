import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { loadLegalMarkdown } from "@/lib/legal";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Family Hub privacy policy — what we collect, how we protect children's data, and your rights.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const source = loadLegalMarkdown("privacy-policy.md");
  return <LegalPage title="Privacy Policy" source={source} />;
}
