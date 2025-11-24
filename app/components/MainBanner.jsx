export default function MainBanner({ title = "Título principal", subtitle = "" }) {
  return (
    <div className="main-banner" role="region" aria-label="Faixa principal de conteúdo">
      <div className="banner-content">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <a className="read-more" href="#feed">Ver notícias</a>
      </div>
    </div>
  );
}
