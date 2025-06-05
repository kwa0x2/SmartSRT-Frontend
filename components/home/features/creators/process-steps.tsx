import { FileVideo, FileDown } from "lucide-react";
import ProcessStepItem from "./process-step-item";

const ProcessSteps = () => {
  return (
    <div className="relative">
      {/* Video Yükleme Adımı */}
      <ProcessStepItem
        icon={<FileVideo className="w-7 h-7 text-blue-500" />}
        title="Upload Short Video"
        description="Support for MP4, MOV up to 5 minutes"
        iconBgColor="bg-blue-500/10"
        iconColor="text-blue-500"
      />

      {/* AI İşleme Adımı */}
      <ProcessStepItem
        icon={
          <svg className="w-7 h-7 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        title="AI Processing"
        description="Automatic speech recognition & timing"
        iconBgColor="bg-purple-500/10"
        iconColor="text-purple-500"
      />

      {/* SRT İndirme Adımı */}
      <ProcessStepItem
        icon={<FileDown className="w-7 h-7 text-green-500" />}
        title="Download SRT File"
        description="Ready to use in video editors"
        iconBgColor="bg-green-500/10"
        iconColor="text-green-500"
      />

    </div>
  );
};

export default ProcessSteps; 