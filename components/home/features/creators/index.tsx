import CreatorsContent from "./content";
import ProcessCard from "./process-card";

interface CreatorsProps {
  isAuthenticated: boolean
}

const Creators = ({isAuthenticated}: CreatorsProps) => {
  return (
    <section className="py-20 md:pb-60">
      <div className="px-4 md:px-64 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          <CreatorsContent isAuthenticated={isAuthenticated}/>
          <ProcessCard />
        </div>
      </div>
    </section>
  );
};

export default Creators;
