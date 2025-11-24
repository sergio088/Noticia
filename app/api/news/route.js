import news from "@/public/news.json";

export async function GET() {
  return Response.json({ success: true, data: news });
}
