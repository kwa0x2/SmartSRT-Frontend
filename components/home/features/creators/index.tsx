import CreatorsContent from "./content";
import ProcessCard from "./process-card";

const Creators = () => {
  return (
    <section className="py-20 md:pb-60">
      <div className="px-4 md:px-64 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          <CreatorsContent />
          <ProcessCard />
        </div>
      </div>
    </section>
  );
};

export default Creators;
