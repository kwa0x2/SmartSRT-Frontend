
interface ProcessStepItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor: string;
  iconColor: string;
}

const ProcessStepItem = ({
  icon,
  title,
  description,
  iconBgColor,
  iconColor,
}: ProcessStepItemProps) => {
  return (
    <div className="flex items-center gap-6 group py-4 rounded-xl transition-all duration-300 mt-8 first:mt-0">
      <div className={`w-14 h-14 rounded-xl ${iconBgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStepItem; 