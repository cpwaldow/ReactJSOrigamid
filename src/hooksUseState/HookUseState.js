import React, {useState} from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

// Estado
// O estado de uma aplicação representa as características dela naquele momento. Por exemplo: osdados do usuário foram carregados, o botão está ativo, o usuárioestá na página de contato e etc.

/* const App = () => {
  const ativo = true;
  return (
    <button disabled={!ativo}>{ativo ? 'Ativo' : 'Inativo'}</button>
  )
} */

// Hooks
// Os hooks são funções especiais do React que permitem controlarmos o estado e o ciclo de vida de componentes funcionais. Isso antes só era possível com classes.

/* const App1 = () => {
  const [ativo1, setAtivo1] = useState(0);

  return (
    <button onClick={() => setAtivo1(!ativo1)}>
      {ativo1 ? 'Ativo' : 'Inativo'}
    </button>
  )
} */

// Múltiplos Estados
// Não existem limites para o uso do useState, podemos definir diversos no mesmo componente.

/* const App1 = () => {
  const [ativo1, setAtivo1] = useState(0);
  const [dados, setDados] = useState({nome: 'Carlos', idade: '24'});

  const handleClick = () => {
    setAtivo1(!ativo1);
    setDados({...dados, faculdade: 'Sim'})
  }

  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>
      {ativo1 ? 'Ativo' : 'Inativo'}
    </button>
    </div>
  )
} */

// Props
// podemos passar o estado e a função de modificação como propriedades para outros elementos.

const App1 = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <p>{modal ? 'Modal aberto' : 'Modal fechado'}</p>
      <Modal modal={modal} setModal={setModal}/>
      <ButtonModal modal={modal} setModal={setModal}/>
    </>
  )
}

function HookUseState() {
  return (
    <div>
      <App1 />
    </div>
  )
}

export default HookUseState
