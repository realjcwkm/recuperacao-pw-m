import "./Plano.css";

function Plano( {titulo, preco, usuarios, projetos } ){
    return(
        <div className="plano-container">
            <h1 className="plano-titulo">{titulo}</h1>
            <h2 className="plano-preco">GASOLINA CARA</h2>
            <p className="plano-info">QUANTIDADE DE USUARIOS</p>
            <p className="plano-info">QUANTIDADE DE PROJETOS</p>
        </div>
    );
}

export default Plano;