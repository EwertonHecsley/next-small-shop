import Image from "next/image";

type Props = {
  img: string;
  title: string;
  oldPrice: string;
  price: string;
};

export default function LightCard({
  img,
  title,
  oldPrice,
  price,
}: Props) {
  return (
    <article className="bg-white p-5 rounded-lg flex flex-col gap-4 shadow-md">
      
      <div className="flex justify-center h-40 relative">
        <Image
          src={img}
          alt={title}
          fill
          className="object-contain"
        />
      </div>

      <p className="text-gray-800 text-sm line-clamp-2">
        {title}
      </p>

      <div>
        <span className="text-gray-400 text-sm line-through">
          {oldPrice}
        </span>
        <p className="text-purple-600 text-lg font-bold">
          {price}
        </p>
      </div>

      <button className="bg-purple-600 hover:bg-purple-500 text-white py-2 rounded font-semibold transition cursor-pointer">
        COMPRAR
      </button>
    </article>
  );
}
