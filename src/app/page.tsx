// src/app/page.tsx

import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 items-center justify-center">
      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 bg-gray-50">
        <h2 className="text-5xl text-gray-800 font-extrabold mb-4 text-center">
          Instant, Secure, Scalable
        </h2>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl">
          Built with NestJS &amp; Next.js—our chat platform grows with your team. No fluff, just real-time messaging you can trust.
        </p>
        <Link
          href="/chat"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 text-lg"
        >
          Try It Now
        </Link>
      </main>

      {/* Features */}
      <section id="features" className="bg-white py-16 w-full">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="text-center">
            <h3 className="text-2xl text-gray-700 font-semibold mb-2">🚀 Real-Time</h3>
            <p className="text-gray-500">
              Messages delivered in under 200 ms with PusherJS or your own WebSocket.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl text-gray-700 font-semibold mb-2">🔒 Secure</h3>
            <p className="text-gray-500">
              JWT auth and private channels ensure only your users see their conversations.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl text-gray-700 font-semibold mb-2">📈 Scalable</h3>
            <p className="text-gray-500">
              Horizontal scale with Redis adapter in NestJS, giving you room to grow.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
