// src/app/page.tsx

import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="tw:flex tw:flex-col tw:min-h-screen tw:bg-gray-100 tw:items-center tw:justify-center">
      {/* Hero */}
      <main className="tw:flex-1 tw:flex tw:flex-col tw:items-center tw:justify-center tw:px-6 tw:bg-gray-50">
        <h2 className="tw:text-5xl tw:text-gray-800 tw:font-extrabold tw:mb-4 tw:text-center">
          Instant, Secure, Scalable
        </h2>
        <p className="tw:text-lg tw:text-gray-700 tw:mb-8 tw:text-center tw:max-w-2xl">
          Built with NestJS &amp; Next.js—our chat platform grows with your team. No fluff, just real-time messaging you can trust.
        </p>
        <Link
          href="/chat"
          className="tw:bg-blue-600 tw:text-white tw:px-8 tw:py-3 tw:rounded-lg hover:tw:bg-blue-700 tw:text-lg"
        >
          Try It Now
        </Link>
      </main>

      {/* Features */}
      <section id="features" className="tw:bg-white tw:py-16 tw:w-full">
        <div className="tw:max-w-4xl tw:mx-auto tw:grid tw:grid-cols-1 md:tw:grid-cols-3 tw:gap-8 tw:px-6">
          <div className="tw:text-center">
            <h3 className="tw:text-2xl tw:text-gray-700 tw:font-semibold tw:mb-2">🚀 Real-Time</h3>
            <p className="tw:text-gray-500">
              Messages delivered in under 200 ms with PusherJS or your own WebSocket.
            </p>
          </div>
          <div className="tw:text-center">
            <h3 className="tw:text-2xl tw:text-gray-700 tw:font-semibold tw:mb-2">🔒 Secure</h3>
            <p className="tw:text-gray-500">
              JWT auth and private channels ensure only your users see their conversations.
            </p>
          </div>
          <div className="tw:text-center">
            <h3 className="tw:text-2xl tw:text-gray-700 tw:font-semibold tw:mb-2">📈 Scalable</h3>
            <p className="tw:text-gray-500">
              Horizontal scale with Redis adapter in NestJS, giving you room to grow.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
