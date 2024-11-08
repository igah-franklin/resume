import { useEffect } from "react";
import { GrowthBook, GrowthBookProvider } from "@growthbook/growthbook-react";

// Create a GrowthBook instance
const gb = new GrowthBook({
  apiHost: "https://cdn.growthbook.io",
  clientKey: "sdk-abc123",
  enableDevMode: true,
  // Only required for A/B testing
  // Called every time a user is put into an experiment
  trackingCallback: (experiment, result) => {
    console.log("Experiment Viewed", {
      experimentId: experiment.key,
      variationId: result.key,
    });
  },
});
gb.init({
  // Optional, enable streaming updates
  streaming: true
})

interface IGrowthBookWrapperProps {
    user: any;
    children: any;
}

export default function GrowtbookWrapper({ children, user }: IGrowthBookWrapperProps) {
  useEffect(() => {
    // Set user attributes for targeting (from cookie, auth system, etc.)
    gb.setAttributes({
      id: user.id,
      company: user.company,
    });
  }, [user])

  return (
    <GrowthBookProvider growthbook={gb}>
      { children }
    </GrowthBookProvider>
  );
}

