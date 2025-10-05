"use client";

import { FileVideo, FileDown } from "lucide-react";
import ProcessStepItem from "./process-step-item";
import { useTranslations } from "next-intl";

const ProcessSteps = () => {
    const t = useTranslations('Features.steps');

    return (
        <div className="relative">
            {/* Video Yükleme Adımı */}
            <ProcessStepItem
                icon={<FileVideo className="w-7 h-7 text-blue-500" />}
                title={t('upload.title')}
                description={t('upload.description')}
                iconBgColor="bg-blue-500/10"
            />

            {/* AI İşleme Adımı */}
            <ProcessStepItem
                icon={
                    <svg className="w-7 h-7 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                }
                title={t('processing.title')}
                description={t('processing.description')}
                iconBgColor="bg-purple-500/10"
            />

            {/* SRT İndirme Adımı */}
            <ProcessStepItem
                icon={<FileDown className="w-7 h-7 text-green-500" />}
                title={t('download.title')}
                description={t('download.description')}
                iconBgColor="bg-green-500/10"
            />

        </div>
    );
};

export default ProcessSteps; 