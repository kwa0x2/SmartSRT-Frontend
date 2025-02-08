import ApiContent from "./api-content";
import CodeExamples from "./code-examples";

const Developers = () => {
  return (
    <section className="pt-20 pb-40">
      <div className="px-64 mx-auto">
        <div className="grid grid-cols-2 gap-20">
          {/* Left Content */}
          <ApiContent />

          {/* Right Content */}
          <div className="flex items-center">
            <CodeExamples />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developers; 