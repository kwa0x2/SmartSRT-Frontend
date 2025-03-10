import { Link } from "@/i18n/routing";
import { APP_ROUTES } from "@/constants/routes";

const ApiDescription = () => {
  return (
    <div className="text-sm text-muted-foreground space-y-2">
      <p>
        API keys allow you to authenticate with our API and access its
        functionalities programmatically. Each API request made using your
        API key will count towards your monthly subscription limit.
      </p>
      <p>
        For detailed information about API endpoints, request limits, and
        implementation examples, please refer to our{" "}
        <Link href={APP_ROUTES.DOCS.API} className="text-primary hover:underline">
          API documentation
        </Link>
        .
      </p>
    </div>
  );
};

export default ApiDescription; 