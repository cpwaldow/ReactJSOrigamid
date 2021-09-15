import React, { useState } from "react";

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet OK
// https://ranekapi.origamid.dev/json/api/produto/smartphone OK
// https://ranekapi.origamid.dev/json/api/produto/notebook OK
// Crie uma interface com 3 botões, um para cada produto. OK
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela. OK
// Mostre apenas um produto por vez OK
// Mostre a mensagem carregando... enquanto o fetch é realizado OK

const btn = {
  display: "inline-block",
  marginLeft: "18px",
  marginBottom: "18px",
};

const img = {
  width: "250px",
};

const ProductInformation = () => {
  const [produto, setProduto] = useState("");
  const [foto, setFoto] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async (e) => {
    setLoading(true);
    const selecionarProduto = e.target.innerText;
    await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${selecionarProduto}`,
    )
      .then((r) => r.json())
      .then((response) => {
        setDescricao(response.descricao);
        setPreco(response.preco);
        setProduto(response.nome);
        setFoto(response.fotos[0].src);
        setLoading(false);
      });
  };

  return (
    <>
      <header>
        <button onClick={handleClick} style={btn}>
          tablet
        </button>
        <button onClick={handleClick} style={btn}>
          smartphone
        </button>
        <button onClick={handleClick} style={btn}>
          notebook
        </button>
      </header>
      <main>
        <img src={foto} alt={produto} style={img} />
        <p>{produto}</p>
        <p>{descricao}</p>
        <p>{preco && `R$ ${preco}`}</p>
      </main>
      {loading && "Carregando..."}
    </>
  );
};

const ExercicioUseState = () => {
  return <ProductInformation />;
};

export default ExercicioUseState;
