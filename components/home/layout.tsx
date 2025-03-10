import Header from "./header";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
  isAuthenticated: boolean;
}

const Layout = ({ children, isAuthenticated }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header isAuthenticated={isAuthenticated} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
