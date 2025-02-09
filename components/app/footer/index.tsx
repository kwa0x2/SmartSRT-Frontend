const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="py-4">
        <div className="text-center text-sm text-gray-500">
          Copyright © {currentYear} AutoSRT, All rights reserved
        </div>
      </footer>
    );
  };
  
  export default Footer;