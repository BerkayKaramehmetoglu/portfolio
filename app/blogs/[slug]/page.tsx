import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { getBlogBySlug, getBlogs } from "@/services/blogs";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;

  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const allBlogs = await getBlogs();

  const relatedBlogs = allBlogs
    .filter((item) => item.id !== blog.id)
    .slice(0, 2);

  return (
    <>
      <Navbar />

      <main className="min-h-screen w-full bg-[#fcf9f6] pt-20">
        {/* Decorative Background */}
        <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[800px] w-[800px] translate-x-1/3 -translate-y-1/3 rounded-full bg-[#a6f2d1]/5 blur-[120px]" />

        <div className="pointer-events-none absolute left-0 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffdbd0]/5 blur-[100px]" />

        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center px-6 pb-16 pt-20 md:px-8 md:pb-32 md:pt-28">
          {/* ============================= */}
          {/* Article Header */}
          {/* ============================= */}

          <div className="mb-10 flex w-full max-w-[800px] flex-col items-center gap-4 text-center md:mb-12">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {/* Category */}
              <span className="rounded bg-[#eae8e5] px-3 py-1.5 font-label text-[11px] uppercase tracking-widest text-[#45464d]">
                {blog.category}
              </span>

              <span className="text-[#76777d]">•</span>

              {/* Date */}
              <span className="font-label text-[11px] uppercase tracking-widest text-[#76777d]">
                {formatDate(blog.created_at)}
              </span>

              <span className="text-[#76777d]">•</span>

              {/* Reading Time */}
              <span className="font-label text-[11px] uppercase tracking-widest text-[#76777d]">
                {blog.reading_time} Dk Okuma
              </span>
            </div>

            <h1 className="font-display max-w-[800px] text-[42px] font-bold leading-[1.1] tracking-[-0.02em] text-[#1c1c1a] md:text-[64px] md:leading-[1.08]">
              {blog.title}
            </h1>

            {blog.excerpt && (
              <p className="mt-2 max-w-[700px] font-body text-lg leading-8 text-[#45464d] md:text-xl">
                {blog.excerpt}
              </p>
            )}
          </div>

          {/* ============================= */}
          {/* Hero Image */}
          {/* ============================= */}

          {blog.image_url && (
            <div className="relative mb-16 aspect-[16/9] w-full max-w-[1000px] overflow-hidden rounded-xl md:mb-28 md:aspect-[21/9]">
              <Image
                src={blog.image_url}
                alt={blog.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1000px"
                className="object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          )}

          {/* ============================= */}
          {/* Article Content */}
          {/* ============================= */}

          <article className="w-full max-w-[700px] pb-16">
            <div
              className="
                whitespace-pre-wrap
                break-words
                font-body
                text-[18px]
                leading-[1.9]
                text-[#45464d]
                md:text-[20px]
              "
            >
              {blog.content}
            </div>
          </article>

          {/* ============================= */}
          {/* Author */}
          {/* ============================= */}

          <div className="mb-16 flex w-full max-w-[700px] flex-col items-center gap-6 rounded-2xl bg-[#eae8e5] p-8 text-center md:mb-28 md:flex-row md:text-left">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#1c1c1a]">
              <span className="font-display text-3xl font-bold text-white">
                BK
              </span>
            </div>

            <div className="flex flex-col">
              <span className="mb-1 font-label text-[11px] uppercase tracking-widest text-[#000]">
                Yazar
              </span>

              <h3 className="mb-2 font-display text-2xl font-semibold text-[#1c1c1a]">
                Berkay Karamehmetoğlu
              </h3>

              <p className="font-body text-sm leading-6 text-[#45464d]">
                Yazılım geliştirme, modern web teknolojileri ve karşılaştığım
                teknik problemler üzerine notlar paylaşıyorum.
              </p>
            </div>
          </div>
        </div>

        {/* ============================= */}
        {/* Related Articles */}
        {/* ============================= */}

        {relatedBlogs.length > 0 && (
          <section className="w-full bg-[#f6f3f0] py-20 md:py-28">
            <div className="mx-auto max-w-[1280px] px-6 md:px-8">
              <h2 className="mb-10 text-center font-display text-[36px] font-bold text-[#1c1c1a] md:text-[48px]">
                İlginizi Çekebilir
              </h2>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {relatedBlogs.map((relatedBlog) => (
                  <Link
                    key={relatedBlog.id}
                    href={`/blog/${relatedBlog.slug}`}
                    className="group"
                  >
                    <article className="overflow-hidden rounded-2xl bg-[#fcf9f6] shadow-sm transition-transform duration-300 hover:-translate-y-1">
                      {/* Image */}
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#eae8e5]">
                        {relatedBlog.image_url ? (
                          <Image
                            src={relatedBlog.image_url}
                            alt={relatedBlog.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center bg-black">
                            <span className="font-mono text-4xl text-[#a6f2d1]/40">
                              {"</>"}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex flex-col gap-3 p-6">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded bg-[#eae8e5] px-2 py-1 font-label text-[10px] uppercase tracking-widest text-[#45464d]">
                            {relatedBlog.category}
                          </span>

                          <span className="text-xs text-[#76777d] uppercase">
                            {relatedBlog.reading_time} Dk Okuma
                          </span>
                        </div>

                        <h3 className="font-display text-2xl font-semibold leading-tight text-[#1c1c1a] transition-colors group-hover:text-[#1b6b51]">
                          {relatedBlog.title}
                        </h3>

                        <p className="line-clamp-2 font-body text-sm leading-6 text-[#45464d]">
                          {relatedBlog.excerpt}
                        </p>

                        <span className="mt-2 font-label text-[11px] uppercase tracking-widest text-[#1c1c1a]">
                          Devamını Oku ↗
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
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
