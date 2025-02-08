import FooterTop from "./footer-top";
import FooterBottom from "./footer-bottom";

const Footer = () => {
  return (
    <footer className="border-t pt-20">
      <div className="px-64 mx-auto">
        <FooterTop />
        <div className="border-t border-black/40" />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;