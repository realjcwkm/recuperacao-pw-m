import Button from "./Button";
import Opcao from "./Opcao";
import "./App.css"

function App() {
    const menu_processos = [{
        button_desc: "Processos do COVID",
        title: "Processos relacionados ao combate do COVID-19"
    }, 
    {
        button_desc: "Contratos",
        title: "Contratos relacionados ao combate do COVID-19"
    }];

    return (
        <div>
            hello world
            <div className="menu">
                { menu_processos.map( (processo) => {
                    return (
                        <Opcao
                            button_desc={processo.button_desc}
                            title={processo.title}
                        />
                    )
                } ) }
            </div>            
            <Button text={menu_processos[0].button_desc} />
            <Button text="Licitações" />
            <Button text="Contratos" />
        </div>
    );
}

export default App
