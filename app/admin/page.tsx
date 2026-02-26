import Link from "next/link";

export default function AdminPage() {
  return (
    <div
      className="min-h-[60vh] flex flex-col items-center justify-center px-6"
      data-oid="v3bnwj5"
    >
      <h1
        className="text-2xl font-semibold text-[#f5f5f0] mb-4"
        data-oid="r.qg0tz"
      >
        Admin
      </h1>
      <p className="text-[#999999] mb-6" data-oid="6wduqzl">
        Content is managed via content/pageData.json.
      </p>
      <Link
        href="/"
        className="text-[#c8a46e] hover:underline"
        data-oid="t4ca:_t"
      >
        ← Tillbaka till startsidan
      </Link>
    </div>
  );
}
