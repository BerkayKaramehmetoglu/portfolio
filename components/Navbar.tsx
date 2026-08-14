"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Projeler", href: "/projects" },
  { label: "Blog", href: "/blogs" },
  { label: "Hakkımda", href: "/hakkimda" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/10 bg-[#fcf9f6]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-8">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="flex h-8 w-8 items-center justify-center bg-black text-white">
            B
          </div>

          <span className="font-display text-2xl font-semibold tracking-tight">
            Berkay Karamehmetoğlu
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`font-label text-xs uppercase tracking-[0.15em] transition-colors ${
                  isActive
                    ? "font-bold text-black"
                    : "text-[#45464d] hover:text-black"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Profile */}
        <div className="flex items-center">
          <Image
            src="/images/profile.jpeg"
            alt="Berkay Karamehmetoglu"
            width={40}
            height={40}
            priority
            className="h-10 w-10 rounded-full border border-[#c6c6cd] object-cover"
          />
        </div>
      </div>
    </header>
  );
}
