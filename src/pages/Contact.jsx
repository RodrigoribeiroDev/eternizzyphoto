import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import '../pages/CSS/Contact.css'; 

const Contact = () => {
  const whatsappNumber = '558191475789'
  const whatsappMessage = 'Olá! Gostaria de mais informações.';
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title">Fale Conosco</h1>
        <p className="contact-description">
          Entre em contato conosco por WhatsApp ou e-mail. Estamos prontos para atender você!
        </p>

        <div className="contact-buttons">
          <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn whatsapp"
          >
            <FaWhatsapp size={22} />
            WhatsApp
          </a>

          <a
            href="mailto:sac@eternizzy.com"
            className="contact-btn email"
          >
            <FaEnvelope size={22} />
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
