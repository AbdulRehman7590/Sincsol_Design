import Image from 'next/image';

interface RecruitmentStepProps {
  step: number;
  title: string;
  description: string;
  icon: string;
  isLast?: boolean;
}

export default function RecruitmentStep({
  step,
  title,
  description,
  icon,
  isLast,
}: RecruitmentStepProps) {
  return (
    <div className="relative text-center">
      <div className="flex flex-col items-center mt-10">
        <div className="w-8 h-8 bg-[#8B5CF6] rounded-full flex items-center justify-center text-white ">
          <p className="text-sm">{step}</p>
        </div>
        <h3 className="font-medium text-lg mb-2">{title}</h3>
      </div>
      <div className="flex flex-col items-center mt-10">
        <div className="w-32 h-32 bg-[#8B5CF6] rounded-full flex items-center justify-center text-white mb-4">
          <Image src={icon} alt={title} height={64} width={64} />
        </div>
        <p className="text-md text-gray-600">{description}</p>
      </div>

      {!isLast && (
        <div className="hidden md:block absolute top-[55%] left-[75%] w-[75%] h-[2px] border-t-2 border-dashed border-[#8B5CF6]/60" />
      )}
    </div>
  );
}
