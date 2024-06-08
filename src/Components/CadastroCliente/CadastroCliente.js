import React, { useState } from 'react';
import './CadastroCliente.css';
import { convertToBase64 } from '../../Funcao/Arquivo';
const CadastroCliente = ({ onCadastroSucess }) => {
    const [formData, setFormData] = useState({
        nome: '',
        sexo: '',
        dataNascimento: '',
        cpf: '',
        endereco: {
            rua: 'nome da rua',
            cidade: 'nome da cidade',
            estado: 'nome do estado',
            cep: 'seu cep'
        },
        fotosPerfil: []
    });
    const [cpfError, setCpfError] = useState("");
    const [fotoError, setFotoError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }
    const handleChangeFoto = async (e) => {
        const file = e.target.files[0];
        if (file) {
            try {
                const base64String = await convertToBase64(file);
                const fotoPerfil = {
                    nomeArquivo: file.name,
                    tipoConteudo: file.type,
                    dataUpload: new Date().toISOString(),
                    base64: base64String

                };
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    fotosPerfil: [fotoPerfil]
                }));
            } catch (error) {
                setFotoError(error.message);
                console.error(error);
            }
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
    }
    return (
        <div className="container-cadastro-cliente">
            <form onSubmit={handleSubmit}>
                <label>Nome:</label>
                <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
                <div className="input-container">
                    <label>Sexo:</label>
                    <label htmlFor='Masculino'><input type='radio'
                        id='Masculino'
                        name='sexo'
                        value='Masculino'
                        checked={formData.sexo === 'Masculino'}
                        onChange={handleChange}
                        required />{" "}Masculino</label>
                    <label htmlFor='Feminino'><input type='radio'
                        id='Feminino'
                        name='sexo'
                        value='Feminino'
                        checked={formData.sexo === 'Feminino'}
                        onChange={handleChange}
                        required />{" "}Feminino</label>
                </div>

                <label htmlFor='dataNascimento'>Data de Nasimento:</label>
                <input type='date' name='dataNascimento' id='dataNascimento' value={formData.dataNascimento} onChange={handleChange} required />
                <label htmlFor='cpf'>CPF:</label>
                <input type='text' name='cpf' id='cpf' value={formData.cpf} onChange={handleChange} required />

                <label htmlFor='fotos'>Foto de Perfil:</label>
                <input type='file' name='fotos' id='fotos' onChange={handleChangeFoto} required />

                {cpfError && <p style={{ color: 'red' }}>{cpfError}</p>}
                {fotoError && <p style={{ color: 'red' }}>{fotoError}</p>}

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}
export default CadastroCliente;