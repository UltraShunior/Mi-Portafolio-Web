import React from "react";

export default function Footer() {
  return (
    <footer className="px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        Copyright © {new Date().getFullYear()}. Make with 💓 by NahueDev
      </small>
      <p className="text-xs pb-[2rem]">
        <span className="font-semibold">Sobre este sitio:</span> construido con
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
