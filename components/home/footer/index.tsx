import FooterTop from "./footer-top";
import FooterBottom from "./footer-bottom";

const Footer = () => {
  return (
    <footer className="pt-10 md:pt-20">
      <div className="px-4 md:px-8 lg:px-64 mx-auto">
        <FooterTop />
        <div className="border-t border-black/40" />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;