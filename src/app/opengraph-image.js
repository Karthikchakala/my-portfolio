import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Karthik Chakala — Software Engineer";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#050505",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Subtle Grid Pattern via Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Logo Mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: 28,
            background: "#0a0a0a",
            border: "1px solid rgba(255,255,255,0.1)",
            marginBottom: 48,
          }}
        >
          <span
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: "white",
              letterSpacing: "-2px",
            }}
          >
            CK
          </span>
        </div>

        {/* Name */}
        <span
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "white",
            letterSpacing: "-3px",
            marginBottom: 16,
          }}
        >
          Karthik Chakala
        </span>

        {/* Title */}
        <span
          style={{
            fontSize: 24,
            fontWeight: 400,
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "6px",
            textTransform: "uppercase",
          }}
        >
          Software Engineer
        </span>
      </div>
    ),
    { ...size }
  );
}
