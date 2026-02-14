import Image from "next/image";

type Props = {
  img: string;
  title: string;
  oldPrice: string;
  price: string;
};

export default function BlackCard({
  img,
  title,
  oldPrice,
  price,
}: Props) {
  return (
    <article className="bg-[#11161D] p-5 rounded-lg flex flex-col gap-4 shadow-md">
      
      <div className="bg-white rounded-md p-4 flex justify-center h-40 relative">
        <Image
          src={img}
          alt={title}
          fill
          className="object-contain p-4"
        />
      </div>

      <p className="text-white text-sm line-clamp-2">
        {title}
      </p>

      <div>
        <span className="text-gray-400 text-sm line-through">
          {oldPrice}
        </span>
        <p className="text-cyan-400 text-xl font-bold">
          {price}
        </p>
      </div>

      <button className="bg-cyan-500 hover:bg-cyan-400 text-white py-2 rounded font-semibold transition cursor-pointer">
        COMPRAR
      </button>
    </article>
  );
}
