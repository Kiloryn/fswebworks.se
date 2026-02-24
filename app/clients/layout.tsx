/**
 * Layout för kundsidor (kopierade från exempelsidor).
 * Inget FS Webworks-header/footer och ingen exempel-banner – bara sidinnehållet.
 */
export default function ClientsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
