import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="tw:flex tw:items-center tw:justify-between tw:px-8 tw:py-4 tw:bg-white tw:shadow">
      <div className="tw:text-2xl tw:font-bold tw:text-gray-800">RealTime Chat</div>
      <div className="tw:space-x-4">
        <Link href="/" className="tw:text-gray-600 hover:tw:text-gray-800">
          Home
        </Link>
        <Link
          href="/chat"
          className="tw:bg-blue-600 tw:text-white tw:px-4 tw:py-2 tw:rounded hover:tw:bg-blue-700"
        >
          Chat Room
        </Link>
      </div>
    </nav>
  );
}