import Link from "next/link";

export default function AdminPage() {
  return (
    <div
      className="min-h-[60vh] flex flex-col items-center justify-center px-6"
      data-oid="yj_k0.w"
    >
      <h1
        className="text-2xl font-semibold text-[#f5f5f0] mb-4"
        data-oid="6-fbgld"
      >
        Admin
      </h1>
      <p className="text-[#999999] mb-6" data-oid="a-mrfb6">
        Content is managed via content/pageData.json.
      </p>
      <Link
        href="/"
        className="text-[#c8a46e] hover:underline"
        data-oid="1ha1.2w"
      >
        ← Tillbaka till startsidan
      </Link>
    </div>
  );
}
