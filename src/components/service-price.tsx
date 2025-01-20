export default function ServiceItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 text-purple-500 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg text-purple-500">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
