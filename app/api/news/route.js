import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "news.json");
    const content = await fs.readFile(filePath, "utf8");
    const news = JSON.parse(content);

    return Response.json({ success: true, data: news });
  } catch (err) {
    console.error(err);
    return Response.json(
      { success: false, error: "Erro ao ler notícias" },
      { status: 500 }
    );
  }
}
