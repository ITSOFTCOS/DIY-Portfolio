import Image from "next/image";

type PortfolioType = {
  image: string;
  name: string;
};

export default function PortfolioCard(props: PortfolioType) {
  return (
    <div className="relative w-full h-80 shadow-2xl rounded-2xl overflow-hidden group">
      <Image
        src={props.image}
        alt={props.name}
        fill
        className="transition-transform duration-300 group-hover:scale-110"
        style={{ objectFit: "cover" }}
      />

      <div className="absolute left-0 bottom-0 w-full bg-gray-800/70 text-white p-2 opacity-0 group-hover:opacity-100 transition">
        <p>{props.name}</p>
      </div>
    </div>
  );
}
