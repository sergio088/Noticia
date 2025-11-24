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
 const res = await fetch("http://localhost:3000/api/news", {
  cache: "no-store"
});


  const json = await res.json().catch(() => ({ success: false, data: [] }));
  const initialNews: News[] = json && json.success ? json.data : [];

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
            src="/videos/sample-video.mp4"
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
