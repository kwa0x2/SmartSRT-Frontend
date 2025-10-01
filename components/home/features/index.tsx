import Creators from "./creators";
import Developers from "./developers";

interface FeaturesProps {
  isAuthenticated: boolean
}

const Features = ({isAuthenticated}: FeaturesProps) => {
  return (
    <>
      <Creators isAuthenticated={isAuthenticated}/>
      {/* <Developers isAuthenticated={isAuthenticated}/> */}
    </>
  );
};

export default Features;
