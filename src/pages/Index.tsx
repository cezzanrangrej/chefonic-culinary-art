import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import LiveStations from "@/components/LiveStations";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Gallery />
        <LiveStations />
        <Services />
        <Contact />
      </main>
    </>
  );
};

export default Index;
