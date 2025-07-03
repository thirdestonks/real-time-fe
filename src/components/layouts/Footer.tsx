'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 text-sm py-4 text-center w-full">
      © {new Date().getFullYear()} RealTime Chat. Built with 💜 by Your Team.
    </footer>
  );
}
