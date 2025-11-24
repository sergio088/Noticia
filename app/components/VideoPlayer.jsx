export default function VideoPlayer({ title = "Vídeo", src = "", poster = "" }) {
  return (
    <div className="video-card" role="region" aria-label="Player de vídeo">
      <h3>{title}</h3>
      {src ? (
        <video
          controls
          width="100%"
          preload="metadata"
          poster={poster || ""}
        >
          <source src={src} type="video/mp4" />
          Seu navegador não suporta o elemento <code>video</code>.
        </video>
      ) : (
        <div className="no-video">Nenhum vídeo disponível</div>
      )}
    </div>
  );
}
