import express from 'express';

const app = express();
app.use(express.json());

const servidor = express();
servidor.use(express.json());

const registros = []; // DB em tempo de execução
servidor.post('/registros', (req, res) => {
    const dados = req.body;//pega dados do corpo da requisição

    if (!dados.nome) {
        return res.status(400).json({
            erro: "Campo 'nome' é obrigatório."
        }); 
    }

    console.log(`Dados da requisição! 
        o que tem no corpo que o frontemd enviou:${dados}`)
    registros.push(dados);//simulação de armazenamento dos dados
    });

    res.status(201).json({ 
        sucesso: true,
        mensagem: 'Registro criado com sucesso!',
        dados: dados
    })

servidor.get('/registros', (req, res) => {
    res.status(200).json(registros);
});

servidor.listen(3000, () => {
    console.log('sitema esta rodando em http://localhost:3000');
});

//rota post - recebe dados do formulário e armazena
app.post('/registros', (req, res) => {
    const dados = req.body;//pega dados do corpo da requisição
    registros.push(dados);//simulação de armazenamento dos dados
    res.status(201).json({
        mensagem: 'Registro criado com sucesso!',
        dados: dados
    });
});

const dados = req.body;//pega dados do corpo da requisição

if (!dados.nome) {
    return res.status(400).json({
        erro: "Campo 'nome' é obrigatório."
    }); 
}