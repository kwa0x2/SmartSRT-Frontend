import { Card, CardContent } from "@/components/ui/card";
import ProcessSteps from "./process-steps";

const ProcessCard = () => {
  return (
    <div className="relative flex items-center mt-10 md:mt-0">
      <Card className="overflow-hidden rounded-2xl border-0 w-full">
        <CardContent>
          <ProcessSteps />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProcessCard; 