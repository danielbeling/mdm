import { CiBoxes, CiSearch } from 'react-icons/ci';
import { PiChats } from 'react-icons/pi';
import { BsPersonCircle, BsHandbag } from 'react-icons/bs';
import { IoMdMenu, IoMdClose, IoIosArrowDown } from 'react-icons/io';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useState } from 'react';

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <div className="header-container">
                <div className="header-barra">
                    <p>
                        <CiBoxes className="icone-top" />
                        <span>Enviamos para todo Brasil! Compre sem taxas</span>
                    </p>
                </div>
                <div className="header-content">
                    <div className="logo">
                        <img src="/img/logo.png" alt="Logo" />
                    </div>
                    <div className="search">
                        <input
                            type="search"
                            placeholder="Digite o que você procura"
                            className="search-input"
                        />
                        <CiSearch className="search-icon" />
                    </div>
                    <div className="header-central">
                        <div>
                            <p>
                                <PiChats className="icon" /> Central de <br />{' '}
                                Atendimento
                            </p>
                        </div>
                        <div>
                            <p>
                                <BsPersonCircle className="icon" /> Bem-vindo(a)
                                <br /> Entrar ou Cadastrar
                            </p>
                        </div>
                        <div className="bash">
                            <BsHandbag className="icon" />
                        </div>
                    </div>
                </div>
                <div className="list-link">
                    <ul className="list">
                        <li className="list-item">
                            <IoMdMenu className="icon" />
                            <span>Todas as categorias</span>
                            <MdKeyboardArrowDown />
                        </li>
                        <li className="list-item">Pokémon</li>
                        <li className="list-item">
                            Roupas <MdKeyboardArrowDown />
                        </li>
                        <li className="list-item">Kiss | Glamlite</li>
                        <li className="list-item">Pronta Entrega</li>
                        <li className="list-item">Produtos até 99,00</li>
                        <li className="list-item">Minis/Travel Size</li>
                        <li className="list-item">
                            Marcas <MdKeyboardArrowDown />
                        </li>
                    </ul>
                </div>
            </div>

            {/* Menu Mobile */}
            <div className="mobile">
                <div className="mobile-menu">
                    <ul>
                        <li>
                            <IoMdMenu className="menu" onClick={toggleMenu} />
                        </li>
                        <li>
                            <img src="/img/search.png" alt="" />
                        </li>
                    </ul>
                </div>
                <div className="mobile-logo">
                    <img src="/img/logo.png" alt="" />
                </div>
                <div className="mobile-sacola">
                    <BsHandbag className="icon" />
                </div>
            </div>

            {/* Side Menu */}
            <div className={`side-menu ${openMenu ? 'open' : ''}`}>
                <div className="close-icon">
                    <IoMdClose onClick={toggleMenu} />
                </div>
                <div className="mobile-logo">
                    <img src="/img/logo.png" alt="Logo" />
                </div>
                <ul>
                    <li>
                        <a href="#">Pokémon</a>
                    </li>
                    <li>
                        <a href="#">
                            Roupas <IoIosArrowDown className="arrow-bottom" />
                        </a>
                    </li>
                    <li>
                        <a href="#">Kiss | Glamlite</a>
                    </li>
                    <li>
                        <a href="#">Pronta Entrega</a>
                    </li>
                    <li>
                        <a href="#">Produtos até 99,00</a>
                    </li>
                    <li>
                        <a href="#">Minis/Travel Size</a>
                    </li>
                    <li>
                        <a href="#">
                            Marcas <IoIosArrowDown className="arrow-bottom" />
                        </a>
                    </li>
                </ul>
            </div>
            <div
                className={`overlay ${openMenu ? 'open' : ''}`}
                onClick={toggleMenu}
            ></div>
        </>
    );
}
