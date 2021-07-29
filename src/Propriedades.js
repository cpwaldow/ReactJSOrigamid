import React from 'react'
import Form from './Propriedades/Form'

// Propriedades
// Assim como uma função pode receber argumentos, podemos também passar argumentos aos componentes. Esses são conhecidos como propriedades ou props.

const Titulo = (props) => {
  return <h1>{props.texto}</h1>
}

// Multiplas propriedades
// Podemos passar quantas propriedade quisermos

const SubTitulo = (props) => {
  return <h2 style={{ color: props.cor}}>{props.texto}</h2>
}

// Desestruturação
// É comum desestruturarmos as propriedades

const InterTitulo = ({ cor, texto}) => {
  return <h3 style={{ color: cor}}>{texto}</h3>
}

// Children
// Se utilizarmos o componente abrindo e fechando o mesmo, o conteúdo interno deste será acessado através da propriedade childen

const Titulo2 = (props) => {
  return <h1>{props.children}</h1>
}

// Rest e Spread
// Usamos o rest e spread quando não sabemos todas as propriedades que um componente pode receber

const Input = ({ label, id, ...props}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} {...props} />
    </div>
  )
}

// Dados
// Podemos passar diferentes tipos de dados e até outros componente nas propriedades

const Header = ({ logado, nome }) => {
  if(logado) {
    return <header>Bem-vindo, {nome}!</header>
  } else {
    return <header>Login</header>
  }
}

const Propriedades= () => {
  const logado = true;
  const nome = 'Carlos';
  return (
    <section>
      <Header logado={logado} nome={nome}/>
      <Titulo texto='Meu primeiro título'/>
      <Titulo texto='Meu segundo título'/>

      <SubTitulo texto="Meu primeiro subtitulo" cor="blue"/>
      <SubTitulo texto="Meu segundo subtitulo" cor="red"/>

      <InterTitulo texto="Meu primeiro intertitulo" cor="blue" />
      <InterTitulo texto="Meu segundo intertitulo" cor="red" />

      <Titulo2>Meu primeiro título</Titulo2>
      <Titulo2>
        <p>Título 2</p>
        <p>Título 3</p>
      </Titulo2>

      <Form />
    </section>
  )
}

export default Propriedades
