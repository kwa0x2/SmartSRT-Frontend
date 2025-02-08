import ApiContent from "./api-content";
import CodeExamples from "./code-examples";

const Developers = () => {
  return (
    <section id="developers" className="py-20 md:pb-60">
      <div className="px-4 md:px-64 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          <ApiContent />
          <div className="relative flex items-center mt-10 md:mt-0">
            <CodeExamples />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developers;