import React from 'react';
// I ideal é dividir o aplicativo em pequenos componentes para facilitar sua manutenção. Iremos trabalhar durante o curso com os chamados componentes funcionais.
import Header from './Components/Header';
import Footer from './Components/Footer';

// Interface
// Não existe limite para a composição de componentes, eles podem ser desde componentes gerais, como o Header e o Footer, até micro componentes como Input e Button
import Form from './Components/Form';

// Return
// Um componente deve sempre retornar algo. O retorno pode ser qualquer tipo de dado aceitado pelo JSX (string, array, elemento JSX, null e etc)

const Teste = () => {
  const active = true;
  if (active) {
    return <p>Ativo</p>
  } else {
    return null // O null evita de dar erro caso a condicional estiver falsa
  }
}



const Componentes = () => {
  return (
    <>
      <Header />
      <Teste />
      <Form />
      <Footer />
    </>
  )
}

export default Componentes;