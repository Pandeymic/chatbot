export async function POST(req: Request) {
  const { message } = await req.json();
  return new Response(
    JSON.stringify({ response: `Echo: ${message}` }),
    { headers: { "Content-Type": "application/json" } }
  );
}
