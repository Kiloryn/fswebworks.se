import Link from "next/link";

export default function AdminPage() {
  return (
    <div
      className="min-h-[60vh] flex flex-col items-center justify-center px-6"
      data-oid="zr8oc91"
    >
      <h1
        className="text-2xl font-semibold text-[#f5f5f0] mb-4"
        data-oid="qt0cq5k"
      >
        Admin
      </h1>
      <p className="text-[#999999] mb-6" data-oid="uhr5lk0">
        Content is managed via content/pageData.json.
      </p>
      <Link
        href="/"
        className="text-[#c8a46e] hover:underline"
        data-oid="n7vttpq"
      >
        ← Tillbaka till startsidan
      </Link>
    </div>
  );
}
