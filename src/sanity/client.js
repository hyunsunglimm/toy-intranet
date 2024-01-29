import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "y3b22irq",
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-01-26",
  // token:
  //   "skEROsDDFhTiALmkyI9ZD1wGWlcQAlqpnEtXBF3JrKOzpt5BRSKA0BHwPZW4GrRxf05eJZU8qyGDVgJclSrqNaRzG72q26rMGVjih8zq8LwsGs5J192LRRsKiYJtfQOV9sjB81cOF8nTCQt2DE7xHOTdbnID45tUttVJxFBLYFwdX02wxUK5",
});

export default client;
