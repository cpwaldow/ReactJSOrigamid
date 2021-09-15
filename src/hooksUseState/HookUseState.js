import React, { useState } from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

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

// Reatividade
// Não modifique o estado diretamente. Utilize sempre a função de atualização do estado, pois ela que garante a reatividade dos componentes.

const Reatividade = () => {
  const [items, setItems] = useState("Nada");

  const reatividadeHandleClick = () => {
    setItems("Tudo");
  };
  return <button onClick={reatividadeHandleClick}>{items}</button>;
};

// Callback
// Podemos passar uma função de callback para atualiza o estado. A função de callback recebe um parâmetro que representa o valor anterior e irá modificar o estado para o valor que for retornado na função;

const Callback = () => {
  const [ativo, setAtivo] = useState(true);

  const CallbackHandleClick = () => {
    setAtivo((anterior) => !anterior);
  };
  return (
    <button onClick={CallbackHandleClick}>{ativo ? "Ativo" : "Inativo"}</button>
  );
};

// StricMode
// O modo estrito invoca duas vezes a renderização do componente, quando o está é atualizado. Assim, é possível identidicarmos funções com efeitos colateráis (side effects) e eliminarmos as mesmas.

// Funções com efeitos colateráis são aquelas que modificam estados que estão fora das mesmas.

const Contador = () => {
  const [contar, setContar] = useState(0);
  const [items, setItems] = useState([`Item ${contar}`]);

  const handleClick = () => {
    setContar(contar + 1);
    setItems([...items, `Item ${contar + 1}`]);
  };
  return (
    <>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>Adicionar item {contar + 1}</button>
    </>
  );
};

const App1 = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <p>{modal ? "Modal aberto" : "Modal fechado"}</p>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal modal={modal} setModal={setModal} />
      <br />
      <br />
      <Reatividade />
      <br />
      <br />
      <Callback />
      <br />
      <br />
      <Contador />
    </>
  );
};

function HookUseState() {
  return (
    <div>
      <App1 />
    </div>
  );
}

export default HookUseState;
