import { setFetchDeleteById } from "../../Funcao/getApiFetch"
import icoDelete from "../../Imagens/ico-delete.svg"
import "./DeletarRegistro.css"

const DeletarRegistro = ({id, onDelete}) =>{

    const deletarFetch = async (id) => {
        try {
            const reponse = await setFetchDeleteById(`http://localhost:8080/clientes/${id}`);

            if (!reponse.ok) {
                throw new Error('Network reponse was not ok!');
            }
            alert(`Registro com ID ${id} deletado com sucesso!`)
        } catch (error) {
            alert('Houve um problema com a operação de exclusão:', error)
        }
    };

    return(
        <button onClick={() => deletarFetch(id)} className="bt-gerenciar-deletar">
            <img src={icoDelete} className="ico" alt="Remover registro"/>
        </button>
    );

}

export default DeletarRegistro;