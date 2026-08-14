import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden bg-[#fcf9f6] px-8 pt-20">
      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="gridPattern"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />

              <circle cx="60" cy="60" r="1.5" fill="currentColor" />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#gridPattern)" />
        </svg>
      </div>

      {/* Green glow */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[600px] w-[600px] rounded-full bg-[#a6f2d1] opacity-10 blur-3xl" />

      {/* Blue glow */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-[800px] w-[800px] rounded-full bg-[#dae2fd] opacity-5 blur-[120px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-12 gap-8">
        {/* Side label */}
        <div className="hidden items-center justify-start gap-8 md:col-span-1 md:flex md:flex-col">
          <div className="h-32 w-px bg-[#c6c6cd]" />

          <span className="font-label rotate-180 [writing-mode:vertical-rl] text-xs uppercase tracking-[0.2em] text-[#45464d]">
            Yazılım Geliştirici
          </span>
        </div>

        {/* Main content */}
        <div className="col-span-12 flex flex-col gap-8 md:col-span-10 lg:col-span-8">
          {/* Eyebrow */}
          <div className="animate-slide-up flex items-center gap-2">
            <span className="h-[2px] w-8 bg-[#1b6b51]" />

            <span className="font-label text-xs uppercase tracking-[0.15em] text-[#1b6b51]">
              Portfolyom
            </span>
          </div>

          {/* Heading */}
          <h1 className="animate-slide-up-delay-1 font-display max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-[#1c1c1a] md:text-7xl lg:text-[84px] lg:leading-[1.1]">
            Modern{" "}
            <span className="font-light italic text-[#45464d]">Deneyimler</span>
            <br />
            İnşa Ediyorum.
          </h1>

          {/* Description */}
          <p className="animate-slide-up-delay-2 max-w-2xl text-lg leading-8 text-[#45464d] md:text-xl">
            Mobil ve web dünyasında temiz kod ve kullanıcı odaklı çözümlerle
            dijital geleceği tasarlıyorum. Her satır kod, daha iyi bir hikayenin
            başlangıcıdır.
          </p>

          {/* Buttons */}
          <div className="animate-slide-up-delay-3 flex flex-wrap items-center gap-4 pt-2">
            <a
              href="projects"
              className="group inline-flex items-center justify-center rounded bg-black px-8 py-4 font-label text-xs uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#31302f]"
            >
              <span>Projelerimi Gör</span>

              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#blog"
              className="inline-flex items-center justify-center rounded border border-black px-8 py-4 font-label text-xs uppercase tracking-[0.15em] text-black transition-colors duration-300 hover:bg-[#f0edea]"
            >
              Blog Yazılarım
            </a>
          </div>

          {/* Tech stack */}
          <div className="animate-fade-in mt-12 flex flex-wrap items-center gap-6">
            <span className="font-label text-xs uppercase tracking-[0.15em] text-[#45464d]">
              Kullandığım Teknolojiler
            </span>

            <span className="h-px w-12 bg-[#c6c6cd]" />

            <div className="flex flex-wrap items-center gap-4 text-sm text-[#45464d]">
              <span className="font-code">Kotlin</span>
              <span>•</span>
              <span className="font-code">Jetpack Compose</span>
              <span>•</span>
              <span className="font-code">XML</span>
              <span>•</span>
              <span className="font-code">Next.js</span>
              <span>•</span>
              <span className="font-code">JavaScript / TypeScript</span>
              <span>•</span>
              <span className="font-code">Firebase / Supabase</span>
              <span>•</span>
              <span className="font-code">SQL</span>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative hidden lg:col-span-3 lg:flex lg:items-end lg:justify-end">
          <div className="relative h-[500px] w-[400px] overflow-hidden">
            <div className="relative h-full w-full bg-[#e5e2df]">
              <Image
                src="/images/hero.jpeg"
                alt="Berkay Karamehmetoglu"
                fill
                priority
                sizes="(max-width: 1024px) 0px, 400px"
                className="object-cover grayscale mix-blend-darken transition-all duration-700 hover:grayscale-0"
              />
            </div>

            <div className="pointer-events-none absolute inset-4 border border-black/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
