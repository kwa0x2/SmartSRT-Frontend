import Footer from "./footer";
import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 md:px-8">
        <div className="w-full max-w-4xl mx-auto">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
