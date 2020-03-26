import React, {useState} from 'react';

import Header from './Hearder';

//JSX (JavaScript XML)
//App é Componente

function App2() {
  //Conceito de estato
  const [counter, setCounter] = useState(0); // Array [valor, funcaoDeAtualizacao]

  function incremnt() {
    setCounter(counter + 1);
  }

  return (
    // <Header>Semana OmniStack</Header>
    //<Header title="Semana OmniStack"/>
    <div> {/*quando a mais de um componete deve haver uma div*/}
      <Header>Contator: {counter}</Header>
      <button onClick={incremnt}>Incrementar</button>
    </div>
  );
}

export default App;
