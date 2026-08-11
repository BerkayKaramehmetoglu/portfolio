import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Hero />
      </main>

      <Footer />
    </>
  );
}
