export default function VideoPlayer({ title = "Vídeo", src = "", poster = "" }) {
  const isYouTube =
    src.includes("youtube.com") || src.includes("youtu.be");

  // Converter link curto do YouTube
  const getYouTubeEmbedUrl = (url) => {
    if (url.includes("youtu.be")) {
      const id = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${id}`;
    }

    if (url.includes("watch?v=")) {
      const id = url.split("watch?v=")[1].split("&")[0];
      return `https://www.youtube.com/embed/${id}`;
    }

    return url;
  };

  return (
    <div className="video-card">
      <h3>{title}</h3>

      {src ? (
        isYouTube ? (
          <iframe
            width="100%"
            height="315"
            src={getYouTubeEmbedUrl(src)}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video controls width="100%" preload="metadata" poster={poster}>
            <source src={src} type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
        )
      ) : (
        <div className="no-video">Nenhum vídeo disponível</div>
      )}
    </div>
  );
}
