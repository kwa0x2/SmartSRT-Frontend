import { Badge } from "@/components/ui/badge";
import { IconSparkles } from "@tabler/icons-react";
import { Link } from "@/i18n/routing";
import { APP_ROUTES } from "@/config/routes";

export const FreeBadge = () => {
  return (
    <div className="flex items-center justify-center mb-6">
      <Link href={`${APP_ROUTES.SUBSCRIPTION}`}>
        <Badge 
          variant="outline" 
          className="bg-gradient-to-r from-blue-50 to-indigo-100 text-blue-800 border-blue-200 px-4 py-2 rounded-full flex items-center gap-2 [&>svg]:size-4 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-200 hover:border-blue-300 transition-all cursor-pointer shadow-sm"
        >
          <IconSparkles className="text-blue-600" />
          <span className="font-semibold">Free Plan • Go Pro</span>
        </Badge>
      </Link>
    </div>
  );
};