import { ImageResponse } from "next/og";

export const alt = "Contact Center USA - US-based call center outsourcing services";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          background: "#07111f",
          color: "#ffffff",
          padding: "64px",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(135deg, #07111f 0%, #111827 52%, #b91c1c 140%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -120,
            display: "flex",
            height: 420,
            width: 420,
            borderRadius: 420,
            background: "rgba(220, 38, 38, 0.34)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -220,
            left: 480,
            display: "flex",
            height: 520,
            width: 520,
            borderRadius: 520,
            border: "2px solid rgba(255, 255, 255, 0.12)",
          }}
        />

        <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              height: 48,
              width: 48,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 12,
              background: "#dc2626",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            C
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: 18,
              fontSize: 30,
              fontWeight: 800,
              letterSpacing: 0,
            }}
          >
            Contact Center USA
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            maxWidth: 880,
          }}
        >
          <div
            style={{
              display: "flex",
              marginBottom: 18,
              color: "#fca5a5",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            24/7 USA-based support teams
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 78,
              fontWeight: 900,
              lineHeight: 1.02,
              letterSpacing: 0,
            }}
          >
            Call Center Outsourcing That Answers Fast
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 26,
              color: "rgba(255, 255, 255, 0.82)",
              fontSize: 30,
              lineHeight: 1.35,
            }}
          >
            Inbound support / outbound sales / customer care / technical support
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "rgba(255, 255, 255, 0.72)",
            fontSize: 24,
          }}
        >
          <div style={{ display: "flex" }}>contactcenterusa.com</div>
          <div style={{ display: "flex" }}>Get a fast quote</div>
        </div>
      </div>
    ),
    size,
  );
}
