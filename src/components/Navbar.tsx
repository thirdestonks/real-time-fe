import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="h-10 flex items-center justify-between px-8 bg-white shadow">
      <div className="text-xl font-bold text-gray-800">RealTime Chat</div>
      <div className="space-x-4">
        <Link href="/" className="text-gray-600 hover:text-gray-800">
          Home
        </Link>
        <Link
          href="/chat"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Chat Room
        </Link>
      </div>
    </nav>
  );
}