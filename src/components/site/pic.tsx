import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export function Pic({ src, alt, className, width, height, priority }: Props) {
  const q = src.indexOf("?");
  const path = q === -1 ? src : src.slice(0, q);
  const query = q === -1 ? "" : src.slice(q);
  const webp = path.replace(/\.(jpe?g)$/i, ".webp");

  return (
    <picture className="contents">
      <source srcSet={`${webp}${query}`} type="image/webp" />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn("outline-none", className)}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "low"}
      />
    </picture>
  );
}
