import { Link } from 'react-router-dom';
import {
    IoIosMenu,
    IoMdClose,
    IoIosCart
} from "react-icons/io";
import { useState } from 'react';

import '../styles/components/header.sass'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className='header'>
            <nav>
                <h1><Link to="/" className='title-main'>Adega DEV</Link></h1>

                <div className='menu-icon' onClick={toggleMenu}>
                    {isMenuOpen ? <IoMdClose /> : <IoIosMenu />}
                </div>

                <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <li><Link to="/destilados">Destilados</Link></li>
                    <li><Link to="/cervejas" >Cervejas</Link></li>
                    <li><Link to="/refrigerantes">Refrigerantes</Link></li>
                    <li><Link to="/variedades" >Variedades</Link></li>

                   <button><Link to="/car" className='car'><IoIosCart /></Link></button> 
                   <button><Link to="/login" className='btn-login'>Login</Link></button>
                </ul>


            </nav>

        </header>
    )
}

export default Header
