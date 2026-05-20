import { useState } from 'react';
import InputField from './src/components/InputField';
import BotaoEnviar from './src/components/BotaoEnviar';

    function FormularioCadastro() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        senha: '',
        dataNascimento: '',
        genero: ''
    });
    const [erro, setErro] = useState('');
    const [sucesso, setSucesso] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const faltando = Object.entries(formData).filter(([_, v]) => !v).map(([k]) => k);
        if (faltando.length > 0) {
            setErro(`O(s) campo(s) ${faltando.join(', ')} é(são) obrigatório(s).`);
            setSucesso('');
            return;
        }
        setErro('');
        setSucesso('Formulário enviado com sucesso!');
        console.log('Dados do formulário:', formData);
        // opcional: limpar formulário
        // setFormData({ nome:'', email:'', telefone:'', senha:'', dataNascimento:'', genero:'' });
    };

    return (
        <form onSubmit={handleSubmit}>
            {erro && <p style={{ color: 'red' }}>{erro}</p>}
            {sucesso && <p style={{ color: 'green' }}>{sucesso}</p>}
            <InputField label="Nome" type="text" id="nome" name="nome" placeholder="Digite seu nome" value={formData.nome} onChange={handleInputChange} />
            <InputField label="Email" type="email" id="email" name="email" placeholder="Digite seu email" value={formData.email} onChange={handleInputChange} />
            <InputField label="Telefone" type="tel" id="telefone" name="telefone" placeholder="Digite seu telefone" value={formData.telefone} onChange={handleInputChange} />
            <InputField label="Senha" type="password" id="senha" name="senha" placeholder="Digite sua senha" value={formData.senha} onChange={handleInputChange} />
            <InputField label="Data de nascimento" type="date" id="dataNascimento" name="dataNascimento" value={formData.dataNascimento} onChange={handleInputChange} />
            <InputField label="Gênero" type="text" id="genero" name="genero" placeholder="Digite seu gênero" value={formData.genero} onChange={handleInputChange} />
            <BotaoEnviar texto="Cadastrar" />
        </form>
    );
}
export default FormularioCadastro;