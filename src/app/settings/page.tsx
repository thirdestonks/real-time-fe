'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Account from '@/components/settings/Account'
import Password from '@/components/settings/Password'
import Theme from '@/components/settings/Theme'
import { clsx } from 'clsx'

const tabs = ['Account', 'Password', 'Theme']

export default function SettingsPage() {
  return (
    <div className="min-h-screen flex bg-gray-800">
      <Sidebar />

      <div className="flex-1 flex flex-col bg-gray-600 text-white">
        <header className="bg-gray-900 px-6 py-4 border-b border-gray-800">
          <h1 className="text-2xl font-bold">Settings</h1>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <Account />
            <Password />
            <Theme />
          </div>
        </main>
      </div>
    </div>
  )
}
