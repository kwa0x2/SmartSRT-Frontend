import LanguageSelector from "./language-selector";

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="py-6 flex justify-between items-center text-gray-500">
      <div className="text-sm">
        Copyright © {currentYear} AutoSRT, All rights reserved
      </div>
      <LanguageSelector />
    </div>
  );
};

export default FooterBottom;