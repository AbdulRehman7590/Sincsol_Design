import Image from "next/image";

interface ValueCardProps {
  icon?: string;
  step?: number;
  title: string;
  description: string;
}

export default function ValueCard({
  icon,
  step,
  title,
  description,
}: ValueCardProps) {
  return (
    <div className="flex flex-col items-center justify-center p-6 hover:shadow-xl transition-shadow">
      {icon ? (
        <div className="w-24 h-24 flex items-center justify-center">
          <Image src={icon} alt={title} width={48} height={48} />
        </div>
      ) : step !== undefined ? (
        <div className="w-12 h-12 my-4 rounded-full bg-[#8B5CF6] flex items-center justify-center">
          <span className="text-2xl font-bold text-white">{step}</span>
        </div>
      ) : null}

      <h3 className="font-bold mb-2 text-center text-md">{title}</h3>
      <p className="text-gray-500 text-sm text-center px-10">{description}</p>
    </div>
  );
}
