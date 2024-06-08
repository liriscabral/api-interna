import { Fragment, useEffect, useState } from "react";
import { setFetchListAll } from "../../Funcao/getApiFetch";
import './ListaCliente.css'
import DeletarRegistro from "../DeletarRegistro/DeletarRegistro";
import CadastroCliente from "../CadastroCliente/CadastroCliente";

const ListaCliente = () => {
    const [clientes, setClientes] = useState([]);

    const listAll = async () => {
        const res = await setFetchListAll('http://localhost:8080/clientes/listar');
        if (!res.ok) {
            throw new Error('Ops! Algo deu errado!');
        }
        const data = await res.json();
        setClientes(data);
    };
    useEffect(() => {
        listAll();
    }, []);

    return (
        <Fragment>
            <CadastroCliente onCadastroSuccess={listAll}/>
            <ul id="conteiner-lista-cliente">
                <li className="title-cliente">
                    <span>Nome</span>
                    <span>Sexo</span>
                    <span>Data de Nascimento</span>
                    <span>CPF</span>
                    <span className="gerenciar">Deletar</span>
                </li>
                {clientes.map(cliente => (
                    <li className="item-cliente" key={cliente.id}>
                        <span>{cliente.nome}</span>
                        <span>{cliente.sexo}</span>
                        <span>{cliente.dataNascimento}</span>
                        <span>{cliente.cpf}</span>
                        <DeletarRegistro id={cliente.id} onDelete={listAll} />
                    </li>
                ))}
            </ul>
        </Fragment>
    );
}

export default ListaCliente;