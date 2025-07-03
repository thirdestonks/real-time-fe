import { GalleryVerticalEnd } from 'lucide-react'

import { LoginForm } from '@/components/LoginForm'

export default function LoginPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-start pt-24 px-6 md:pt-32">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <LoginForm />
      </div>
    </div>
  )
}
