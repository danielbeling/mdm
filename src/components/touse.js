export default function ToUse() {
    return (
        <>
            <div className="touse-container">
                <div className="touse-img">
                    <img src="/img/Imagem.png" alt="imagem" />
                </div>
                <div className="touse-content">
                    <div className="touse-text">
                        <h1>Como utilizar o Clube?</h1>
                        <p>
                            Se você quer saber mais sobre como{' '}
                            <span>resgatar cupons</span> e também como{' '}
                            <span>consultar os pontos</span> da sua conta veja a
                            explicação abaixo.
                        </p>
                    </div>
                    <div className="touse-tutor">
                        <div className="touse-box">
                            <span>1</span>
                            <p>Clique na moeda no canto direito da tela</p>
                        </div>
                        <div className="touse-box">
                            <span>2</span>
                            <p>Consulte seu saldo ou selecione o cupom</p>
                        </div>
                        <div className="touse-box">
                            <span>3</span>
                            <p>Insira seu CPF cadastrado ou CNPJ</p>
                        </div>
                        <div className="touse-box">
                            <span>4</span>
                            <p>O cupom será enviado para seu e-mail</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
