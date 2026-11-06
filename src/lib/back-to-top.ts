/** Keep the fixed Upp control clear of a footer that has scrolled into view. */
export function uppButtonBottomPx(
  viewportHeight: number,
  footerTop: number | undefined,
  baseBottom: number,
  gap = 12,
): number {
  if (footerTop === undefined) return baseBottom;
  return Math.max(baseBottom, Math.round(viewportHeight - footerTop + gap));
}
