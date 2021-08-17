import React, {useState} from 'react'
import ButtonModal from './ButtonModal';
import Modal from './Modal';

// Estado
// O estado de uma aplicação representa as características dela naquele momento. Por exemplo: os dados do usuário foram carregados, o botão está ativo, o usuário está na página de contato e etc.

const FirstButton = () => {
  let ativo = true;

  const handleClick = () => {
    ativo = !ativo;
    console.log(ativo)
    // Não troca o disabled do botão ou o texto pelo fato que ele não reconhece a troca do valor, por esse motivo ele não renderiza a página
  }

  return (
    <button disabled={!ativo} onClick={handleClick}>
      {ativo ? 'Ativo' : 'Inativo'}
    </button>
  )
}

// Hooks
// Os Hooks são funções especiais do React que permitem controlarmos o estado e o ciclo de vida de componentes funcionais. Isso antes só era possível com classes

const UseStateHook = () => {
  const [ativo, setAtivo] = useState(true);
  return (
    <button onClick={() => setAtivo(!ativo)}>
      {ativo ? 'Ativo' : 'Inativo'}
    </button>
  )
}

// Múltiplos Estados
// Não existe limites para o uso do useState, podemos definir diversos no mesmo componente.

const MultiplosHooks = () => {
  const [ativo, setAtivo] = useState(false);
  const [contar, setContar] = useState(0);
  const [dados, setDados] = useState({nome: 'Carlos', idade: "24"});

  const handleClick = () => {
    setAtivo(!ativo);
    setDados({...dados, faculdade: 'Possui faculdade'})
  }

  return (
    <>
      <p>{dados.nome}, {dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>
      {ativo ? 'Ativo' : 'Inativo'}
    </button>
    </>
  )
}

// Props
// podemos passar o estado e a função de modificação como propriedades para outros componentes

function HookUseState() {
  const [modal, setModal] = useState(false)
  return (
    <>
      <FirstButton />
      <br />
      <br />
      <UseStateHook />
      <br />
      <br />
      <MultiplosHooks />
      <br />
      <br />
      <div>{modal ? 'Modal aberto' : 'Modal fechado'}</div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </>
  )
}

export default HookUseState
