import LanguageSelector from "./language-selector";

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="py-4 md:py-6 flex flex-col md:flex-row justify-center md:justify-between items-center text-gray-500 gap-4 md:gap-0">
      <div className="text-xs md:text-sm text-center md:text-left">
        Copyright © {currentYear} AutoSRT, All rights reserved
      </div>
      <LanguageSelector />
    </div>
  );
};

export default FooterBottom;