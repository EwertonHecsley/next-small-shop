import BlackCard from "../cards/BlackCard";


export default function WirelessSection() {
  const products = [
    {
      id: 1,
      img: "/cards/1.png",
      title: "Mouse Gamer Logitech G Pro X Superlight 2",
      oldPrice: "R$ 1.529,48",
      price: "R$ 814,90",
    },
    {
      id: 2,
      img: "/cards/2.png",
      title: "Mouse Gamer Logitech LIGHTSYNC RGB",
      oldPrice: "R$ 708,81",
      price: "R$ 499,99",
    },
    {
      id: 3,
      img: "/cards/3.png",
      title: "Headset Gamer Logitech G Pro X",
      oldPrice: "R$ 1.909,99",
      price: "R$ 1.499,99",
    },
    {
      id: 4,
      img: "/cards/4.png",
      title: "Caixa de som Logitech G560",
      oldPrice: "R$ 1.277,77",
      price: "R$ 999,90",
    },
  ];

  return (
    <section className="bg-[#0B0F14] py-16">
      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <BlackCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
