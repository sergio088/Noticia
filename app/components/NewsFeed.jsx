"use client"
import { useEffect, useState } from "react";

export default function NewsFeed({ initialNews }) {
  const [news, setNews] = useState(initialNews);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Se quiser recarregar via cliente:
    async function fetchNews() {
      setLoading(true);
      try {
        const res = await fetch("/api/news");
        const json = await res.json();
        if (json.success) setNews(json.data);
      } catch (err) {
        console.error("Erro ao buscar notícias:", err);
      } finally {
        setLoading(false);
      }
    }

    // Busca client-side para demonstrar integração dinâmica
    if (!initialNews || initialNews.length === 0) {
      fetchNews();
    }
  }, [initialNews]);

  return (
    <div id="feed" className="news-feed" role="list" aria-label="Feed de notícias">
      <h3>Últimas notícias</h3>
      {loading && <p>Carregando...</p>}
      <ul>
        {news.map((n) => (
          <li key={n.id} className="news-item" role="listitem">
            <img src={n.thumbnail || "/sample-thumb.jpg"} alt="" className="thumb" />
            <div className="news-text">
              <h4 className="news-title">{n.title}</h4>
              <p className="news-excerpt">{n.excerpt}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
