import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import Footer from "@/components/Footer";

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
