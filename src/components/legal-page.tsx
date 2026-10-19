import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function LegalPage({
  title,
  source,
}: {
  title: string;
  source: string;
}) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-foreground"
      >
        <span aria-hidden="true">&larr;</span> Back to home
      </Link>
      <header className="mt-6 border-b border-border pb-6">
        <h1 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-foreground sm:text-5xl">
          {title}
        </h1>
      </header>
      <div className="prose-legal mt-8">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{source}</ReactMarkdown>
      </div>
    </article>
  );
}
