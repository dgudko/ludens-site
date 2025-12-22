import { cn } from "@/src/ui/cn";
import { Container } from "@/components/Container";

export function Section({
  id,
  title,
  lead,
  children,
  className,
}: {
  id: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const titleId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={cn("scroll-mt-24 py-16 sm:py-20", className)}
    >
      <Container>
        <div className="max-w-3xl">
          <h2
            id={titleId}
            className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-3xl"
          >
            {title}
          </h2>
          {lead ? (
            <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg">
              {lead}
            </p>
          ) : null}
        </div>
        <div className="mt-10">{children}</div>
      </Container>
    </section>
  );
}

