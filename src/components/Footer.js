import { FaFacebookF, FaWhatsapp, FaRegEnvelope } from 'react-icons/fa';
import { CiInstagram, CiClock2 } from 'react-icons/ci';
import { LiaRocketchat } from 'react-icons/lia';

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-container">
                    <div className="footer_logo">
                        <img src="/img/logo.png" alt="" />

                        <p>
                            O nosso atendimento funciona de segunda a sexta 8:00
                            as 18:00. Havendo qualquer dúvida, estamos á
                            disposição no direct ou WhatsApp. Atenciosamente
                            Imports MDM <br /> 💖 Instagram. @importsmdm
                        </p>
                    </div>
                    <div className="q_links">
                        <h3>Estamos no WhatsApp</h3>
                        <ul>
                            <li>
                                <p className="border bold">
                                    <FaWhatsapp className="icon" /> (31)
                                    9197-4692
                                </p>
                            </li>
                            <li>
                                <p className="border">
                                    Envie uma mensagem <br />{' '}
                                    <FaRegEnvelope className="icon-2" />{' '}
                                    <span className="bold">
                                        importsmdm@gmail.com
                                    </span>
                                </p>
                            </li>
                            <li>
                                <p>
                                    Horario de atendimento <br />
                                    <CiClock2 /> Seg á sex das 7:00 as 18:00
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="q_links">
                        <h3>
                            <span>Institucional</span>
                        </h3>
                        <ul>
                            <li>
                                <p>
                                    Fale Conosco <br /> Meios de pagamento e{' '}
                                    <br />
                                    de frete <br />
                                    Política de privacidade <br />
                                    Politica de Trocas
                                    <br /> e Devoluções
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="q_links">
                        <h3>
                            <span>Redes Sociais</span>
                        </h3>
                        <ul className="sociais">
                            <li>
                                <p>
                                    <FaFacebookF className="icons" />
                                </p>
                            </li>
                            <li>
                                <p>
                                    <CiInstagram className="icons" />
                                </p>
                            </li>
                            <li>
                                <p>
                                    <LiaRocketchat className="icons" />
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-container-2">
                <div className="footer_logo-2">
                    <p>Formas de pagamentos</p>
                    <img src="/img/bandeiras_cartoes.png" alt="" />
                </div>
                <div className="q_links">
                    <h3>
                        <span>Selos de segurança</span>
                    </h3>
                    <div>
                        <img src="/img/selo.webp" alt="" />
                        <img src="/img/google.png" alt="" />
                    </div>
                </div>
                <div className="q_links">
                    <h3>
                        <span>Formas de envio</span>
                    </h3>
                    <div>
                        <img src="/img/sedex.png" alt="" />
                        <img src="/img/pac.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="rodape">
                <div className="rodape-info">
                    <p>
                        ImportsMDM LTDA - CNPJ: 46.099.897/001-53 &copy; Todos
                        os direitos reservados. 2024
                    </p>
                </div>
                <div className="rodape-sections">
                    <div className="rodape-section">
                        <h3>Desenvolvimento:</h3>
                        <img src="/img/groomb.png" alt="Desenvolvimento" />
                    </div>
                    <div className="rodape-section">
                        <h3>Plataforma</h3>
                        <img src="/img/integrada.webp" alt="Plataforma" />
                    </div>
                </div>
            </div>
        </>
    );
}
