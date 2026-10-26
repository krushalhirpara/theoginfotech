import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "THE OG INFOTECH — Website Development, Mobile Apps, SaaS & AI Automation";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "70px 80px",
          background: "linear-gradient(135deg, #3B1408 0%, #521D0E 60%, #FE3912 100%)",
          color: "white",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top Branding Pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FE3912",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            OG
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: "28px",
                fontWeight: 900,
                letterSpacing: "-0.5px",
                color: "#FFFFFF",
              }}
            >
              THE OG INFOTECH
            </span>
            <span
              style={{
                fontSize: "14px",
                letterSpacing: "3px",
                color: "#FED7AA",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Web &bull; App &bull; Software &bull; AI Automation
            </span>
          </div>
        </div>

        {/* Center Big Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "980px" }}>
          <h1
            style={{
              fontSize: "58px",
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: "-1.5px",
              margin: 0,
              color: "#FFFFFF",
            }}
          >
            High-Performance Digital Products & AI Systems Built to Rank #1
          </h1>
          <p
            style={{
              fontSize: "24px",
              color: "#FFEDD5",
              margin: 0,
              lineHeight: 1.4,
              fontWeight: 500,
            }}
          >
            Websites &bull; Mobile Apps &bull; UI/UX &bull; Custom Software &bull; SaaS &bull; AI Workflows
          </p>
        </div>

        {/* Bottom Trust Metrics Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "2px solid rgba(255, 255, 255, 0.2)",
            paddingTop: "24px",
          }}
        >
          <span style={{ fontSize: "18px", color: "#FDBA74", fontWeight: 700 }}>
            100/100 Core Web Vitals &bull; 100% IP Transfer &bull; Zero Downtime
          </span>
          <span style={{ fontSize: "18px", color: "#FFFFFF", fontWeight: 800 }}>
            theoginfotech.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
