'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'
import { Home, MessageCircle, Settings, LogOut } from 'lucide-react'

const navItems = [
  { href: '/', icon: Home },
  { href: '/chat', icon: MessageCircle },
  { href: '/settings', icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-20 bg-gray-800 text-white h-screen flex flex-col items-center py-6 gap-4">
      <nav className="flex flex-col items-center gap-6">
        {navItems.map(({ href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              'p-2 rounded hover:bg-gray-800 transition-colors',
              pathname === href && 'bg-gray-800'
            )}
          >
            <Icon size={24} />
          </Link>
        ))}
      </nav>

      <div className="mt-auto p-2 flex flex-col items-center space-y-3">
        <div className="w-12 h-12 bg-gray-700 text-base font-semibold flex items-center justify-center rounded-full">
          N
        </div>
        <div className="w-12 h-12 bg-red-700 text-base font-semibold flex items-center justify-center rounded-full hover:bg-gray-600">
          <LogOut size={20} />
        </div>
      </div>
    </aside>
  )
}
