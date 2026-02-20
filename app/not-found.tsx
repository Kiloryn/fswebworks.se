import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center"
      data-oid="c_sg9bk"
    >
      <h1 className="text-4xl font-bold text-[#f5f5f0] mb-2" data-oid="imsdq2_">
        404
      </h1>
      <p className="text-[#999999] mb-6" data-oid="u.hb4.o">
        Sidan kunde inte hittas.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#c8a46e] text-[#111111] font-semibold rounded-lg hover:bg-[#d4b480] transition-colors"
        data-oid="g_9n14:"
      >
        Tillbaka till startsidan
      </Link>
    </div>
  );
}
