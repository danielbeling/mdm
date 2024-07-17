import React, { useState } from 'react';

const awardsData = [
    {
        id: 1,
        title: 'Cupom de R$ 10 de desconto',
        description: '200 pontos',
        image: '/img/Presente.png',
    },
    {
        id: 2,
        title: 'Cupom de R$ 20 de desconto',
        description: '300 pontos',
        image: '/img/Presente.png',
    },
    {
        id: 3,
        title: 'Cupom de R$ 30 de desconto',
        description: '400 pontos',
        image: '/img/Presente.png',
    },
    {
        id: 4,
        title: 'Cupom de R$ 40 de desconto',
        description: '500 pontos',
        image: '/img/Presente.png',
    },
];

function Modal({ show, handleClose, handleConfirm, selectedAward }) {
    return (
        <div className={`modal-overlay ${show ? 'modal-show' : 'modal-hide'}`}>
            <div className="modal">
                <button className="modal-close" onClick={handleClose}>
                    &times;
                </button>
                <div className="modal-img">
                    <img src={selectedAward.image} alt={selectedAward.title} />
                </div>
                <div className="modal-text">
                    <h1>Confirmar resgate</h1>
                    <p>
                        Ao selecionar a opção de confirmar abaixo você irá
                        realizar o resgate do <span>{selectedAward.title}</span>{' '}
                        por <span>{selectedAward.description}</span>.
                    </p>
                </div>
                <div className="modal-buttons">
                    <button onClick={handleClose}>Cancelar</button>
                    <button onClick={handleConfirm}>Confirmar</button>
                </div>
            </div>
        </div>
    );
}

export default function Awards() {
    const [showModal, setShowModal] = useState(false);
    const [selectedAward, setSelectedAward] = useState(null);

    const handleOpenModal = (award) => {
        setSelectedAward(award);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleConfirmModal = () => {
        setShowModal(false);
        // Adicione a lógica de confirmação aqui
        console.log('Prêmio resgatado!', selectedAward);
    };

    return (
        <div className="awards-container">
            <div className="awards-content">
                <div className="awards-text">
                    <h4>ACUMULE E GANHE</h4>
                    <h1>Prêmios para resgate</h1>
                </div>
                <div className="card-content">
                    {awardsData.map((award) => (
                        <div className="card-card" key={award.id}>
                            <div className="card-card-img">
                                <img src={award.image} alt={award.title} />
                            </div>
                            <div className="card-context">
                                <p>
                                    {award.title}
                                    <br />
                                    <span>{award.description}</span>
                                </p>
                                <button onClick={() => handleOpenModal(award)}>
                                    Resgatar prêmio
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedAward && (
                <Modal
                    show={showModal}
                    handleClose={handleCloseModal}
                    handleConfirm={handleConfirmModal}
                    selectedAward={selectedAward}
                />
            )}
        </div>
    );
}
