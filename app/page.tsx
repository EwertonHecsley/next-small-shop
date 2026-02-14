import GpuSection from "./_componets/gpuSection/GpuSection";
import Hero from "./_componets/hero/Hero";
import WirelessSection from "./_componets/warelessSection/WirelessSection";


export default function Home() {
  return (
    <main>
      <Hero />
      <WirelessSection />
      <GpuSection />
    </main>
  );
}
