const Eventos = () => {

  // Podemos atribuir eventos diretamente aos elementos JSX como um atributo. Os eventos são sintáticos, ou seja, são criados pelo próprio React, porém seguindo as especificações da W3C
  // https://reactjs.org/docs/events.html

  const handleClick = (event) => {
    alert('Comprou: ' + event.target.innerText);
  }

  // window/document
  // Eventos no window/document ou qualquer elemento fora do React, devem ser adicionados com JavaScript, normalmente usando o addEventListenet.
  // Esse tipo de evento será adicionado com o hook useEffect

  const handleScroll = (event) => {
    console.log(event);
  }
  window.addEventListener('scroll', handleScroll);

  return (
    <>
      <button onClick={handleClick}>Camisa</button>
      <button onClick={handleClick}>Bermuda</button>
      <button onClick={({ target }) => target.classList.toggle('ativo')}>Ativar</button>
      
      <div style={{ height: '200vh' }}>
        Div
      </div>
    </>
  )
}

export default Eventos;