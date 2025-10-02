import { Link } from "@/i18n/routing";
import LanguageSelector from "./language-selector";

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="py-4 md:py-6 flex flex-col md:flex-row justify-center md:justify-between items-center text-gray-500 gap-4 md:gap-0">
      <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
        <div className="text-xs md:text-sm text-center md:text-left">
          © {currentYear} SmartSRT
        </div>
        <div className="flex gap-3 md:gap-4 text-xs md:text-sm">
          <Link href="/privacy" className="hover:text-gray-700 transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-gray-700 transition-colors">
            Terms
          </Link>
          <Link href="/refund" className="hover:text-gray-700 transition-colors">
            Refund
          </Link>
        </div>
      </div>
      <LanguageSelector />
    </div>
  );
};

export default FooterBottom;