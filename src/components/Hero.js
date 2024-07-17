import React, { useState } from 'react';

export default function Hero() {
    const [inputValue, setInputValue] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        if (event.target.value === '') {
            setMessage('');
        }
    };

    const handleConsultClick = () => {
        // Simulação de validação
        if (!inputValue) {
            setMessage('CPF ou CNPJ inválido, tente novamente.');
        } else if (inputValue === '123456789') {
            setMessage('Saldo disponível: 500 pontos.');
        } else if (inputValue === '000000000') {
            setMessage('Erro ao consultar seu saldo, tente novamente.');
        } else if (inputValue === '999999999') {
            setMessage('Dados de cadastro não encontrado.');
        } else {
            setMessage('CPF ou CNPJ inválido, tente novamente.');
        }
    };

    return (
        <div className="hero-container">
            <div className="hero-content">
                <img
                    src="/img/fundo.png"
                    alt="Background"
                    className="hero-image"
                />
                <div className="hero-card">
                    <div className="hero-text">
                        <h1>
                            Conheça o <span>Clube MDM</span>
                        </h1>
                        <p>
                            Benefícios únicos e descontos especiais para você.
                        </p>
                    </div>
                    <div className="hero-consult">
                        <h2>Consulte o seu Saldo</h2>
                        <p>Para consultar de cashback informe seus dados.</p>
                        <div className="input-button">
                            <input
                                type="text"
                                placeholder="Informe seu CPF ou CNPJ"
                                value={inputValue}
                                onChange={handleInputChange}
                            />
                            <button
                                onClick={handleConsultClick}
                                className={message ? 'active' : ''}
                            >
                                Consultar
                            </button>
                        </div>
                        {message && <div className="message">{message}</div>}
                    </div>
                </div>
                <div className="hero-cashback">
                    <div className="hero-back">
                        <div className="hero-item">
                            <div className="hero-carrinho">
                                <img src="/img/Icone.svg" alt="icone" />
                                <p>Realize compras ou desafios</p>
                            </div>
                            <div className="next">
                                <img src="/img/proximo.svg" alt="next" />
                            </div>
                            <div className="hero-carrinho">
                                <img src="/img/Icone-1.svg" alt="icone" />
                                <p>Ganhe pontos e resgate cupons</p>
                            </div>
                            <div className="igual">
                                <img src="/img/igual.svg" alt="next" />
                            </div>
                        </div>
                        <div className="hero-box">
                            <img src="/img/Icone-2.svg" alt="bash" />
                            <p>Utilize seu cashback em compras</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
