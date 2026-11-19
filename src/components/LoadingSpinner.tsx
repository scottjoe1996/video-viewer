import React from "react";

import { Loader2 } from "lucide-react";

const LoadingSpinner: React.FC = () => {
  return (
    <div role="status" className="flex justify-center items-center h-100">
      <Loader2 className="animate-spin" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
