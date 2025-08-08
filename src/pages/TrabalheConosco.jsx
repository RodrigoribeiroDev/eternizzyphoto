import { FaWhatsapp, FaBriefcase } from 'react-icons/fa';
import '../pages/CSS/TrabalheConosco.css';

const TrabalheConosco = () => {
  const whatsappNumber = '5583991639040';
  const whatsappMessage = 'Olá! Gostaria de saber sobre vagas na Eternizzy.';
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const vagasURL = 'https://eternizzyphotography.vagas.solides.com.br/';

  return (
    <div className="trabalhe-container">
      <div className="trabalhe-card">
        <h1 className="trabalhe-title">Trabalhe Conosco</h1>
        <p className="trabalhe-description">
          A Eternizzy está sempre em busca de pessoas apaixonadas por fotografia, experiências únicas e tecnologia. Se você quer fazer parte do nosso time, entre em contato ou veja nossas vagas disponíveis!
        </p>

        <div className="trabalhe-buttons">
          <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="trabalhe-btn whatsapp"
          >
            <FaWhatsapp size={20} />
            WhatsApp
          </a>

          <a
            href={vagasURL}
            target="_blank"
            rel="noopener noreferrer"
            className="trabalhe-btn vagas"
          >
            <FaBriefcase size={20} />
            Veja nossas vagas
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrabalheConosco;
