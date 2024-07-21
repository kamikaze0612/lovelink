// TODO: Improve (add logo or some image make it more beautiful)
import { Spinner } from "@/components/layout/spinner";

const LoadingPage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2 bg-background">
      <Spinner />
      <p className="text-2xl font-semibold text-brand-accent">Loading...</p>
    </div>
  );
};
export default LoadingPage;
