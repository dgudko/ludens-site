type SubstackEmbedProps = {
  src: string;
  title?: string;
};

export function SubstackEmbed({ src, title }: SubstackEmbedProps) {
  if (!src) return null;

  return (
    <div className="w-full max-w-md overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm dark:border-white/15 dark:bg-zinc-950">
      <iframe
        title={title ?? "Substack subscribe"}
        src={src}
        className="h-[320px] w-full"
        frameBorder={0}
        scrolling="no"
      />
    </div>
  );
}
