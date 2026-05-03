"use client";

import { useRouter, usePathname } from "next/navigation";

export default function NavLinks() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNav = (hash: string) => {
    if (pathname === "/") {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${hash}`);
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  };

  return (
    <>
      <li>
        <button
          onClick={() => handleNav("work")}
          className="font-medium text-sm text-black/70 hover:text-primary transition"
        >
          Work
        </button>
      </li>
      <li>
        <button
          onClick={() => handleNav("about")}
          className="font-medium text-sm text-black/70 hover:text-primary transition"
        >
          About
        </button>
      </li>
    </>
  );
}