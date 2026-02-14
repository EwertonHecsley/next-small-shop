import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-black h-[60vh] flex items-center justify-center">
      <section className="relative w-[95%] h-[90%]">
        <Image
          src="/hero.png"
          alt="Imagem de uma mulher sorridente"
          fill
          className="object-cover"
        />
      </section>
    </header>
  );
}
