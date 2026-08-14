import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProjects } from "@/services/projects";
import Image from "next/image";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <Navbar />

      <main className="min-h-screen w-full bg-[#fcf9f6] pt-20">
        <section className="mx-auto w-full max-w-[1280px] px-8 py-12 md:py-24">
          <div className="mb-12 flex flex-col gap-2 md:mb-[120px]">

            <h1 className="font-display text-5xl font-bold tracking-tight text-[#1c1c1a] md:text-[84px] md:leading-[92px]">
              Projelerim
            </h1>

            <p className="mt-4 max-w-2xl text-xl leading-8 text-[#45464d]">
              Farklı amaçlar için geliştirdiğim, ölçeklenebilir ve kullanıcı
              odaklı dijital ürünleri içeren projelerime bir göz atın.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className={`group flex flex-col gap-6 transition-transform duration-500 hover:-translate-y-2 ${
                  index % 2 === 1 ? "md:mt-24" : ""
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#f6f3f0] shadow-lg">
                  {project.image_url && (
                    <Image
                      src={project.image_url}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      preload
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology, index) => (
                      <span
                        key={technology}
                        className={`rounded-full px-3 py-1 text-xs uppercase tracking-wider ${
                          index === 0
                            ? "bg-[#a6f2d1]/30 text-[#1b6b51]"
                            : "bg-[#e5e2df]/50 text-[#45464d]"
                        }`}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <h2 className="font-display text-3xl font-semibold tracking-tight text-[#1c1c1a]">
                    {project.title}
                  </h2>

                  <p className="line-clamp-2 text-base leading-[26px] text-[#45464d]">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4">
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium uppercase tracking-widest text-black"
                      >
                        Canlı Proje →
                      </a>
                    )}

                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium uppercase tracking-widest text-[#45464d]"
                      >
                        GitHub →
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
