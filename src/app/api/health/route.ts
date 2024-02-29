//edge runtime next js
// se pude utilizar en paginas dinamicas en la que queremos una menor latencia
export const runtime = "edge";

export async function GET() {
  return Response.json({ status: "ok" });
}