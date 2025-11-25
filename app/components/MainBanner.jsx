export default function MainBanner({ 
  title = "Notícia em destaque", 
  subtitle = "A história do emoticon :-) e como ele mudou a comunicação online" 
}) {
  return (
    <div className="main-banner">
      <div className="banner-overlay"></div>

      <div className="banner-content">
        <span className="banner-category">CÓDIGO DA INTERNET</span>
        <h2>A história do emoticon :-) e como ele mudou a comunicação online</h2>
        <a className="banner-button" href="#feed">Ver notícias</a>
      </div>
    </div>
  );
}
