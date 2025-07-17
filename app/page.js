import Art from "@/components/Art";
import About from "@/components/About";
import Cocktails from "@/components/Cocktails";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main className="bg-black overflow-x-hidden scroll-smooth">
      <Navbar/>
      <Hero/>
      <Cocktails/>
      <About/>
      <Art/>
      <Menu/>
      <Contact/>
    </main>
  );
}
