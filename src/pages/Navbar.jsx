import '../pages/CSS/Navbar.css'
import { IoMdPhotos } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";

import Contact from './Contact';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
        <div>
            <nav className="navbar">
            <img className ="img-logo" src='/logo.png' />

            <div className='container-buttons'>

                <div className="cta-buttons">

                <span>
                <Link to="/" className='cta-button-contact'> Home <FaHome /></Link>
                </span>
                <span>
                    <Link to="/contact" className='cta-button-contact'>Contrate nossos serviços <FaWhatsapp /> </Link> 
                </span>
                <span>
                <Link to="/gallery" className='cta-button-contact'> Galeria <IoMdPhotos /></Link>
                </span>
                <span>
                <Link to="/trabalheconosco" className='cta-button-contact'> Trabalhe Conosco <IoIosRocket /></Link>
                </span>

                </div>

            </div>


             </nav>

        </div>
  )
}

export default Navbar
