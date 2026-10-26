import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "THE OG INFOTECH — Premier Web, App, SaaS & AI Automation Agency",
    short_name: "THE OG INFOTECH",
    description:
      "Enterprise Website Development, Cross-Platform Mobile Apps, UI/UX Design, Custom Software, SaaS Platforms, and AI Automation Agency.",
    start_url: "/",
    display: "standalone",
    background_color: "#F9B384",
    theme_color: "#FE3912",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
