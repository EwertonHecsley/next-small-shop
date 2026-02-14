import LightCard from "../cards/LigthCard";

export default function GpuSection() {
  const products = [
    {
      id: 1,
      img: "/produtos/1.png",
      title: "Placa de Vídeo RX 6600 CLD 8G ASRock",
      oldPrice: "R$ 2.167,47",
      price: "R$ 1.349,99",
    },
    {
      id: 2,
      img: "/produtos/2.png",
      title: "Placa de Vídeo RX 6750XT Gaming XFX",
      oldPrice: "R$ 4.329,99",
      price: "R$ 2.999,99",
    },
    {
      id: 3,
      img: "/produtos/3.png",
      title: "Placa de Vídeo RTX 4060 8GB",
      oldPrice: "R$ 3.509,99",
      price: "R$ 2.499,99",
    },
    {
      id: 4,
      img: "/produtos/4.png",
      title: "Placa de Vídeo GTX 1650",
      oldPrice: "R$ 947,84",
      price: "R$ 799,99",
    },
  ];

  return (
    <section className="bg-[#F2F2F2] py-16">
      <div className="w-[90%] mx-auto">
        <h2 className="text-2xl font-bold mb-10 text-gray-800">
          Placas de vídeo
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <LightCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
