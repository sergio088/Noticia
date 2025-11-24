import MainBanner from "./components/MainBanner";
import NewsFeed from "./components/NewsFeed";
import VideoPlayer from "./components/VideoPlayer";
import { News } from "../types/news";

export const metadata = {
  title: "Portal de Notícias - Trabalho",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function Page() {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? "";
  let json: { success?: boolean; data?: News[] } = { success: false, data: [] };

  try {
    const res = await fetch(`${base}/api/news`, { cache: "no-store" });

    if (!res.ok) {
      // Log response for debugging but keep default empty data to avoid throwing
      try {
        const body = await res.text();
        console.error("Failed fetching /api/news:", res.status, body);
      } catch (e) {
        console.error("Failed fetching /api/news and could not read body:", e);
      }
    } else {
      const parsed = await res.json();
      if (parsed && typeof parsed === "object") {
        json = parsed as { success?: boolean; data?: News[] };
      }
    }
  } catch (err) {
    // Network or other unexpected error; log and continue with empty data
    console.error("Error fetching news:", err);
  }

  const initialNews: News[] = json && json.success ? json.data ?? [] : [];

  return (
    <div className="container">
      <header className="site-header">
        <h1 className="brand">Portal de Notícias</h1>
      </header>

      <MainBanner title="Notícia em destaque" subtitle="Leia a matéria principal aqui" />

      <main className="main-grid">
        <section id="feed" className="left-col">
          <NewsFeed initialNews={initialNews} />
        </section>

        <aside className="right-col">
          <VideoPlayer
            title="Vídeo em destaque"
            src="https://youtu.be/9HXxn66WpN8?si=PEn9uptYHS1Hz-_Z"
            poster="/sample-thumb.jpg"
          />
        </aside>
      </main>

      <footer className="site-footer">
        <p>Feito para a disciplina — Exemplo de implementação</p>
      </footer>
    </div>
  );
}
