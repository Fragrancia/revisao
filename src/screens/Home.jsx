import { Link } from 'react-router-dom';

export default function Home (){
    return(
        <header>
            <nav>
                <ul>
                     <Link to= "/buscar-cep">Pesquisar um CEP</Link> <p />
                     <Link to= "/pagina-cachorro">Pagina de cachorro</Link>
                </ul>
            </nav>
           
        </header>
    )
}