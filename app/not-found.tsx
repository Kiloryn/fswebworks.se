import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-[#f5f5f0] mb-2">404</h1>
      <p className="text-gray-600 dark:text-[#999999] mb-6">Sidan kunde inte hittas.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#c8a46e] text-[#111111] font-semibold rounded-lg hover:bg-[#d4b480] transition-colors"
      >
        Tillbaka till startsidan
      </Link>
    </div>
  );
}
