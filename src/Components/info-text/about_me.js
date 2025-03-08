import '../styles/info-text/info_text.css';

export default function AboutMe() {
  return (
    <div className="my-text">
      <div className="about-me">
        <img
          className="about-me-icon"
          src="./student-svgrepo-com.svg"
          alt="eu"
        />
        <span className="about-me-text">Acerca de Mim</span>
      </div>

      <div className="about-me-description">
        <p>
          Sou um desenvolvedor web com sólida experiência na criação de páginas
          dinâmicas e responsivas, utilizando as tecnologias
          <strong>HTML</strong>, <strong>CSS/SASS</strong>,
          <strong>JavaScript</strong> e <em>Next.js</em>. Durante o meu estágio,
          fui responsável pelo desenvolvimento completo de um site, desde a sua
          concepção até a implementação de funcionalidades como
          <strong>listagem de produtos</strong>,
          <strong>carrinho de compras</strong> e
          <strong>processo de checkout</strong>.
        </p>

        <p>
          Possuo uma forte capacidade de trabalhar de forma autónoma, com grande
          atenção ao detalhe e um constante foco na
          <strong>experiência do utilizador</strong>. A minha paixão por
          <strong>tecnologia</strong> motiva-me a estar sempre em busca de novos
          desafios, visando a evolução profissional e a criação de soluções
          inovadoras.
        </p>
      </div>
    </div>
  );
}
