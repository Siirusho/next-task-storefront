import { ImageResponse } from "@vercel/og";
import { getProductById } from "@/lib/api";

export const runtime = "edge";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const product = await getProductById(id);

  if (typeof product === "string") {
    return new Response("Not found", { status: 404 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          fontSize: 40,
          padding: "40px",
        }}
      >
        <img src={product.image} width={200} height={200} alt={product.title} />
        <h1 style={{ marginTop: 20 }}>{product.title}</h1>
        <p style={{ fontSize: 24 }}>{product.description.slice(0, 100)}...</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
