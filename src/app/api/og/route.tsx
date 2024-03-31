import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          color: "black",
          background: "#d8cfc4",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Hi!👋 I'm Leo!
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
