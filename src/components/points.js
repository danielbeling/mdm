export default function Points() {
  return (
    <div className="points-container">
      <img src="/img/fundored.png" alt="Background" className="hero-imagered" />
      <div className="points-content">
        <div className="points-text">
          <h3>GANHE PONTOS</h3>
          <h1>Formas de acumular</h1>
        </div>
        <div className="points-card">
          <div className="points-card-box">
            <img src="/img/Icone-pessoa.svg" alt="Ícone Pessoa" />
            <h4>Membros do clube</h4>
            <p>Membros do nosso clube pontuam em dobro em qualquer modalidade.</p>
          </div>

          <div className="points-card-box">
            <img src="/img/Icone-satis.svg" alt="Ícone Satisfação" />
            <h4>Pesquisa de satisfação</h4>
            <p>Deixe seu depoimento sobre seu nível de satisfação e ganhe pontos.</p>
          </div>

          <div className="points-card-box">
            <img src="/img/Icone-glob.svg" alt="Ícone Redes Sociais" />
            <h4>Redes sociais</h4>
            <p>Siga nas redes sociais e acompanhe as dinâmicas e cupons exclusivos.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
