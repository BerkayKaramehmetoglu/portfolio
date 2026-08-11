export default function Footer() {
  return (
    <footer className="w-full border-t border-black/10 bg-[#f0edea] py-20">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center bg-black text-xs text-white">
                B
              </div>

              <span className="font-display text-xl text-[#45464d]">
                Berkay Karamehmetoğlu
              </span>
            </div>

            <p className="text-center text-sm italic text-[#45464d] opacity-70 md:text-left">
              © 2026 Yazılımcı Portfolyom.
            </p>
          </div>

          <div className="flex gap-8">
            <a
              href="https://github.com/BerkayKaramehmetoglu"
              className="font-label text-xs uppercase tracking-tight text-[#45464d] transition-colors hover:text-black"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/berkay-karamehmetoglu/"
              className="font-label text-xs uppercase tracking-tight text-[#45464d] transition-colors hover:text-black"
            >
              LinkedIn
            </a>

            <a
              href="https://www.youtube.com/@berkaykaramehmetogluu"
              className="font-label text-xs uppercase tracking-tight text-[#45464d] transition-colors hover:text-black"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
