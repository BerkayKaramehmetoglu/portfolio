import Image from "next/image";
import Link from "next/link";
import { getBlogs } from "@/services/blogs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function BlogPage() {
  const blogs = await getBlogs();

  const featuredBlog = blogs.find((blog) => blog.is_featured);
  const otherBlogs = blogs.filter((blog) => blog.id !== featuredBlog?.id);

  return (
    <>
      <Navbar />

      <main className="w-full pt-20 bg-[#fcf9f6] min-h-screen">
        <div className="relative flex flex-col w-full">
          {/* Decorative Background */}
          <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[800px] w-[800px] translate-x-1/3 -translate-y-1/3 rounded-full bg-[#a6f2d1]/5 blur-[120px]" />

          <div className="pointer-events-none absolute left-0 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffdbd0]/5 blur-[100px]" />

          {/* Header */}
          <section className="mx-auto w-full max-w-[1280px] px-8 pb-[60px] pt-[80px]">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="flex max-w-3xl flex-col gap-2">
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-[1px] w-8 bg-black" />

                  <span className="font-label text-xs uppercase tracking-widest text-black">
                    Dijital Günlüğüm
                  </span>
                </div>

                <h1 className="font-display text-[84px] font-bold leading-[92px] tracking-[-0.02em] text-[#1c1c1a]">
                  Yazılar, Notlar & Hatalar
                </h1>

                <p className="mt-4 max-w-2xl font-body text-xl leading-8 text-[#45464d]">
                  Karşılaştığım teknik problemleri, kodla ilgili aldığım notları
                  ve yazılım geliştirme sürecindeki deneyimlerimi paylaştığım
                  dijital günlüğüm.
                </p>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 md:pb-4">
                <button className="rounded px-4 py-2 bg-black text-white font-label text-xs">
                  Tümü
                </button>

                <button className="rounded border border-black/20 px-4 py-2 font-label text-xs text-[#1c1c1a] transition-colors hover:bg-[#eae8e5]">
                  Hata Çözümü
                </button>

                <button className="rounded border border-black/20 px-4 py-2 font-label text-xs text-[#1c1c1a] transition-colors hover:bg-[#eae8e5]">
                  Mimari
                </button>

                <button className="rounded border border-black/20 px-4 py-2 font-label text-xs text-[#1c1c1a] transition-colors hover:bg-[#eae8e5]">
                  Web
                </button>
              </div>
            </div>
          </section>

          {/* Featured Post */}
          {featuredBlog && (
            <section className="mx-auto w-full max-w-[1280px] px-8 pb-[120px]">
              <Link href={`/blogs/${featuredBlog.slug}`}>
                <article className="group overflow-hidden rounded-xl border border-black/5 bg-[#f6f3f0] transition-colors hover:bg-[#f0edea]">
                  <div className="flex min-h-[400px] flex-col lg:flex-row">
                    {/* Image */}
                    <div className="relative min-h-[300px] overflow-hidden bg-black lg:w-1/2">
                      {featuredBlog.image_url ? (
                        <Image
                          src={featuredBlog.image_url}
                          alt={featuredBlog.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          preload
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <span className="font-mono text-6xl text-[#a6f2d1]/30">
                            {"</>"}
                          </span>
                        </div>
                      )}

                      <div className="absolute left-8 top-8">
                        <span className="rounded-full bg-white/10 px-3 py-1 font-label text-xs uppercase tracking-wider text-white backdrop-blur-md">
                          Öne Çıkan
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center p-8 lg:w-1/2 lg:p-16">
                      <div className="mb-6 flex items-center gap-4">
                        <span className="font-label text-xs uppercase tracking-wider text-[#1b6b51]">
                          {featuredBlog.category}
                        </span>

                        <span className="h-1 w-1 rounded-full bg-[#c6c6cd]" />

                        <span className="font-label text-xs text-[#45464d]">
                          {formatDate(featuredBlog.created_at)}
                        </span>

                        <span className="h-1 w-1 rounded-full bg-[#c6c6cd]" />

                        <span className="text-xs text-[#76777d] uppercase">
                          {featuredBlog.reading_time} Dk Okuma
                        </span>
                      </div>

                      <h2 className="mb-6 font-display text-[48px] font-bold leading-[56px] text-[#1c1c1a] transition-colors group-hover:text-black">
                        {featuredBlog.title}
                      </h2>

                      <p className="mb-8 line-clamp-3 font-body text-base leading-[26px] text-[#45464d]">
                        {featuredBlog.excerpt}
                      </p>

                      <span className="flex items-center gap-2 font-label text-xs uppercase tracking-widest text-black transition-transform duration-300 group-hover:translate-x-2">
                        Yazıyı Oku
                        <span>→</span>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </section>
          )}

          {/* Blog List */}
          <section className="mx-auto w-full max-w-[1280px] px-8 pb-[120px]">
            <div className="mb-8 flex items-center gap-4">
              <h3 className="font-display text-[32px] font-semibold leading-10 text-[#1c1c1a]">
                Son Yazılar
              </h3>

              <div className="h-[1px] flex-grow bg-black/10" />
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
              {otherBlogs.map((blog, index) => (
                <Link
                  key={blog.id}
                  href={`/blogs/${blog.slug}`}
                  className={index === 1 ? "lg:mt-16" : ""}
                >
                  <article className="group flex h-full cursor-pointer flex-col">
                    {/* Image */}
                    <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-xl border border-black/5 bg-[#eae8e5]">
                      {blog.image_url ? (
                        <Image
                          src={blog.image_url}
                          alt={blog.title}
                          fill
                          preload
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-black">
                          <span className="font-mono text-4xl text-[#a6f2d1]/40">
                            {"</>"}
                          </span>
                        </div>
                      )}

                      <div className="absolute bottom-4 left-4">
                        <span className="rounded-sm border border-black/10 bg-white/90 px-3 py-1 font-label text-xs uppercase tracking-wider text-[#1c1c1a] backdrop-blur-md">
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-grow flex-col">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="font-label text-xs font-medium text-[#45464d]">
                          {formatDate(blog.created_at)}
                        </span>
                      </div>

                      <h4 className="mb-3 font-display text-[28px] font-semibold leading-9 text-[#1c1c1a] transition-colors group-hover:text-black">
                        {blog.title}
                      </h4>

                      <p className="mb-6 line-clamp-3 font-body text-base leading-[26px] text-[#45464d]">
                        {blog.excerpt}
                      </p>

                      <div className="mt-auto">
                        <span className="flex items-center gap-1 font-label text-xs uppercase tracking-wider text-black group-hover:underline">
                          Devamını Oku
                          <span>↗</span>
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}
