//A importacao useState 
import React,{ useState } from 'react';

//Componente = Bloco isolado de HTMl, CSS , JS o qual nao interfere no restante da aplicacao  
//Estado = Informacoes mantidas pelo componente (Lembrar: IMUTABILIDADE =Variavel nunca alterada e sim sempre criada uma nova)
//Propriedade = Informacoes que um componente pai, passa para o componente filho.



function App() {
  const [counter,setCount] = useState(0);

  function increment(nome){
    setCount(counter+1);  
  }
  
  return (
    <>
      <h1>Contador: {counter}</h1>
      <button title = "Botao" onClick={increment}>Incrementar</button>
    </>
  );
}

export default App;
