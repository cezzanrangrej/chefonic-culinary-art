import Hero from "@/components/Hero";
import About from "@/components/About";
import LiveStations from "@/components/LiveStations";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <LiveStations />
      <Services />
      <Contact />
    </main>
  );
};

export default Index;
