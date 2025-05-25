import Link from 'next/link'

export default function Sidebar() {
  return (
    <nav className="tw:w-64 tw:bg-gray-800 tw:text-white tw:p-4 tw:h-screen">
      <h2 className="tw:text-2xl tw:font-bold tw:mb-6">Chat App</h2>
      <ul className="tw:space-y-4">
        <li>
          <Link
            href="/"
            className="tw:text-lg tw:text-gray-300 hover:tw:text-white"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/chat"
            className="tw:text-lg tw:text-gray-300 hover:tw:text-white"
          >
            Chat Room
          </Link>
        </li>
      </ul>
    </nav>
  )
}