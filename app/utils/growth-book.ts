// utils/growthbook.ts
'use client'
import { GrowthBook } from "@growthbook/growthbook";

export const initializeGrowthBook = async () => {

    // Create a GrowthBook instance
    const gb = new GrowthBook({
        apiHost: "https://cdn.growthbook.io",
        clientKey: "secret_admin_IGBcf5tLFGW61VuKd0jAP73gSXWtvpJy5fqcvZEoI",
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

  return gb;
};
