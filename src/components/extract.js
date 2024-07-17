import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack, IoMdEye } from 'react-icons/io';

const mockData = [
    { pontos: 100, tipo: 'Crédito', data: '01/07/2023', situacao: 'Aprovado' },
    { pontos: -50, tipo: 'Débito', data: '02/07/2023', situacao: 'Reprovado' },
    { pontos: 200, tipo: 'Crédito', data: '03/07/2023', situacao: 'Aprovado' },
    { pontos: -70, tipo: 'Débito', data: '04/07/2023', situacao: 'Aprovado' },
    { pontos: 150, tipo: 'Crédito', data: '05/07/2023', situacao: 'Aprovado' },
];

export default function Extract() {
    const [inputValue, setInputValue] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]);
    const [expandedItems, setExpandedItems] = useState([]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        if (event.target.value === '') {
            setMessage('');
        }
    };

    const handleConsultClick = () => {
        if (!inputValue) {
            setMessage('CPF ou CNPJ inválido, tente novamente.');
            return;
        }

        setLoading(true);
        setMessage('');

        // Simulação de uma requisição
        setTimeout(() => {
            if (inputValue === '123456789') {
                setData(mockData);
                setMessage('');
            } else {
                setMessage('Erro ao consultar seu saldo, tente novamente.');
                setData([]);
            }
            setLoading(false);
        }, 2000);
    };

    const handleRetryClick = () => {
        setInputValue('');
        setMessage('');
        setData([]);
    };

    const itemsPerPage = 3;
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const paginatedData = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const toggleExpand = (index) => {
        setExpandedItems((prevExpandedItems) =>
            prevExpandedItems.includes(index)
                ? prevExpandedItems.filter((item) => item !== index)
                : [...prevExpandedItems, index]
        );
    };

    return (
        <>
            <div className="extract-container">
                <div className="extract-text">
                    <h1>Extrato de pontos</h1>
                    <p>
                        Nesta área você pode consultar seu extrato de pontos
                        atual.
                    </p>
                </div>
                <div className="extract-content">
                    <div className="extract-header">
                        <ul>
                            <li>Pontos</li>
                            <li>Status</li>
                            <li>Data</li>
                            <li>Situação</li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="extract-search">
                        {loading ? (
                            <div className="loading">
                                <img src="/img/Vector.png" alt="loading icon" />
                                <p>Carregando extrato...</p>
                            </div>
                        ) : message ? (
                            <div className="message">
                                {message}
                                <button
                                    className="retry-button"
                                    onClick={handleRetryClick}
                                >
                                    Consultar Novamente
                                </button>
                            </div>
                        ) : data.length > 0 ? (
                            <>
                                <div className="extract-list">
                                    {paginatedData.map((item, index) => (
                                        <div key={index}>
                                            <div
                                                className={`extract-item ${
                                                    item.pontos < 0
                                                        ? 'negative'
                                                        : 'positive'
                                                }`}
                                            >
                                                <span className="points">
                                                    {item.pontos < 0
                                                        ? `- ${Math.abs(
                                                              item.pontos
                                                          )}`
                                                        : item.pontos}{' '}
                                                </span>
                                                <span className="status">
                                                    {item.tipo}
                                                </span>
                                                <span>{item.data}</span>
                                                <span>{item.situacao}</span>
                                                <button
                                                    onClick={() =>
                                                        toggleExpand(index)
                                                    }
                                                >
                                                    <span className="detail-text">
                                                        Mais detalhes
                                                    </span>
                                                    <IoMdEye className="detail-icon" />
                                                </button>
                                            </div>
                                            {expandedItems.includes(index) && (
                                                <div className="expanded-info">
                                                    <div className="expanded-item bold">
                                                        <span>Parceiro</span>
                                                        <span>Observação</span>
                                                        <span>
                                                            Pontuado por
                                                        </span>
                                                        <span>
                                                            Código do cupom
                                                        </span>
                                                        <span>
                                                            Através do canal
                                                        </span>
                                                    </div>
                                                    <div className="expanded-item">
                                                        <span>Internal</span>
                                                        <span>
                                                            Desconto de RS{' '}
                                                            {Math.abs(
                                                                item.pontos
                                                            )}
                                                        </span>
                                                        <span>Outros</span>
                                                        <span>
                                                            121983131987
                                                        </span>
                                                        <span>Outros</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <>
                                <img src="/img/search.png" alt="search icon" />
                                <div className="extract-text-2">
                                    <h4>Consultar meu extrato</h4>
                                    <p>
                                        Para verificar seu extrato de pontos
                                        preencha o campo abaixo.
                                    </p>
                                </div>
                                <div className="extract-input">
                                    <input
                                        type="text"
                                        placeholder="Informe seu CPF ou CNPJ"
                                        value={inputValue}
                                        onChange={handleInputChange}
                                    />
                                    <button onClick={handleConsultClick}>
                                        Consultar
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                    {data.length > 0 && !loading && (
                        <div className="pagination-info">
                            <span>
                                Mostrando{' '}
                                <strong>{paginatedData.length}</strong>{' '}
                                registros
                            </span>
                            <div className="pagination-buttons">
                                <button
                                    onClick={handlePreviousPage}
                                    disabled={currentPage === 1}
                                >
                                    <IoIosArrowBack />
                                </button>
                                {[...Array(totalPages)].map((_, index) => (
                                    <button
                                        key={index + 1}
                                        onClick={() =>
                                            handlePageClick(index + 1)
                                        }
                                        className={
                                            currentPage === index + 1
                                                ? 'active'
                                                : ''
                                        }
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                                <button
                                    onClick={handleNextPage}
                                    disabled={currentPage === totalPages}
                                >
                                    <IoIosArrowForward />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
