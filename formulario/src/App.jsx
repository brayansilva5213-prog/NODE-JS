import { useEffect } from "react";
import cabeçalho from "./scr/cabeçalho";
import FormularioCadastro from "../scr/formulariocadastro";
function App() {
  return (
    <div>
      <Cabeçalho />
      <h1>Olá, Mundo!</h1>
    </div>
  );
}

function cabeçalho() {  
  return (
    <header>
      <h1>Meu sistema</h1>
      <p>Bem-vindo ao meu sistema</p>
    </header>
  );
}
export default cabeçalho;

useEffect(() => {
  console.log("Componente montado");
}, [/*dependencias*/]);

return (
  <div>
    <FormularioCadastro />
    <contador />
  </div>
);

<form onSubmit={handleSubmit}>
  {error && <p style={{ color: 'red' }}>{error}</p>}
  {success && <p style={{ color: 'green' }}>{success}</p>}
</form>

setError(''); 
setSuccess(true);

Console.log('Dados do formulário:', formData);

//voltando os campos ao estado inicial}(vazio)
setNome('');
setEmail('');
setTelefone('');
setSenha('');
setDataNascimento('');
setGenero('');