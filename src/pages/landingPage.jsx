import ImgBody from "../assets/ImgBody";
import { Link } from "react-router-dom";
import "../pages/CSS/landingPage.css";

const LandingPage = () => {
  return (
    <div>
      <ImgBody />
         <div className="landing-container">

      <header className="hero">
        <h2>Quem Somos</h2>
        <p>
          Somos uma empresa especializada em fotografia turística desde de 2017.
        </p>
        <p>
          O nosso diferencial está na experiência que oferecemos para cada cliente, onde o nosso principal objetivo é oferecer uma experiência única para todos.
        </p>
        <p>
          Buscamos oferecer um encantamento desde o atendimento, a entrega mais rápida.
        </p>
        <p>
          Contamos com uma equipe interna e externa capacitada e treinada para oferecer o melhor atendimento desde os passeios até a concretização em loja.
        </p>
        <p>
          Somos Natalenses, mas aprendemos a ser Paraibanos, Pernambucanos e Alagoanos, que como bons nordestinos, somos acolhedores!
        </p>
        <p>
          Somos tantos outros que se unem a nós para transformar e realizar sonhos e eternizar memórias.
        </p>
        <p>
          Amamos contribuir na vida dos nossos clientes internos que buscam crescimento pessoal e profissional! Nosso maior objetivo é sermos reconhecidos como a melhor empresa de fotografia turística do Brasil.
        </p>
      </header>

      <section className="mission-values">
        <h3>MISSÃO</h3>
        <p className="highlight">
          ETERNIZAR MOMENTOS OFERECENDO UMA EXPERIÊNCIA ÚNICA PARA TODOS.
        </p>

       <h3>VALORES</h3>
            <div className="valores-tags">
            <span>Fé</span>
            <span>Simplicidade</span>
            <span>Coerência</span>
            <span>Respeito ao Próximo</span>
            <span>Entregar a Mais</span>
            <span>Honestidade</span>
            <span>Loucos por Resultados</span>
            <span>Transparência</span>
            <span>Desenvolver Pessoas</span>
            <span>Compromisso com o Cliente</span>
            </div>


      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Eternizzy Photography</p>
          <Link to="policy" className="footer-link" >Política de Privacidade</Link>
          <Link to="terms" className="footer-link">Termos de Uso</Link>
      </footer>
    </div>
    </div>
   
  );
};

export default LandingPage;

// <Link to="/policy" className="footer-link" >Política de Privacidade</Link>
// <Link to="/terms" className="footer-link">Termos de Uso</Link>