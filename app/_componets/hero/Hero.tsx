import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-black">
      <div className="relative w-full h-[65vh]">
        <Image
          src="/hero.png"
          alt="Wireless Movement"
          fill
          className="object-contain p-5 md:object-cover"
          priority
        />
      </div>
    </section>
  );
}
