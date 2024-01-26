import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "y3b22irq",
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-01-26",
});

export default client;
