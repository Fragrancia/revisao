import {useState} from "react"

export default function BuscarCep(){
    const [cep, setCep] = useState ('')
    const [endereco, setEndereco] = useState(null)

    const fetchEndereco = async () => {
        try{
            const response =    await fetch(`https://viacep.com.br/ws/${cep}/json/`) 
            const data = await response.json()
            setEndereco(data)
        }catch (error){
            console.error(error)
        }
    }



    return(
        <div className="content">
            <div className="texto"><h1>Buscar endereço por CEP</h1></div>
            <input
                type="text"
                value={cep}
                placeholder="Digite Aqui"
                onChange={(e) => setCep(e.target.value)}>
            </input>

            <button onClick={fetchEndereco}>Buscar</button>
            {endereco &&(
                <div className="endereco">
                <p>Rua: {endereco.logradouro}</p>
                <p>Bairro: {endereco.bairro}</p>
                <p>Cidade: {endereco.localidade}</p>
                <p>UF: {endereco.uf}</p>
                </div>
            )}
        </div>
    )
}