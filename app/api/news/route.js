import { promises as fs } from "fs";
import path from "path";

export async function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), "data", "news.json");
    const content = await fs.readFile(filePath, "utf8");
    const news = JSON.parse(content);
    res.status(200).json({ success: true, data: news });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Erro ao ler notícias" });
  }
}
