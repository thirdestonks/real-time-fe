'use client';

export default function Footer() {
  return (
    <footer className="tw:bg-gray-800 tw:text-gray-400 tw:text-sm tw:py-4 tw:text-center tw:w-full">
      © {new Date().getFullYear()} RealTime Chat. Built with 💜 by Your Team.
    </footer>
  );
}
