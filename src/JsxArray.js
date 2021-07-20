import React from 'react';
import JsxArrayExer from './JsxArrayExer'

// O JSX irá listar cada um dos itens da array. Não vai separar ou colocar vírgula, é você que deve modificar a array para o resultado desejado.
const produtos = ['Notebook', 'Smartphone', 'Tablet']; // NotebookSmartphoneTablet

// Keys
// O JSX necessita de uma key única para cada elemento do Array https://reactjs.org/docs/lists-and-keys.html
const empresas = [<li key='e1'>Apple</li>, <li key='e2'>Google</li>]

// Map
// É comum usarmos o map direto na array como uma expressão, retornando um elemento para cada item novo da Array;
const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight'];

// Array de Objetos
// O cenário mais comum é trabalhar com array's de objetos
const livros = [
  {nome: 'Game of thrones', ano: 1996},
  {nome: 'Clash of Kings', ano: 1998},
  {nome: 'Storm of Swords', ano: 2000},
]

const JsxArray = () => {
  return (
    <React.Fragment>
      <p>{produtos}</p>
      <ul>{empresas}</ul>
      <ul>
        {filmes.map((filme) => (
          <li key={filme}>{filme}</li>
        ))}
      </ul>
      <ul>
        {
        livros.filter(({ ano }) => ano >= 1996)
        .map(({ nome, ano }) => (
          <li key={nome}>{nome}, {ano}</li>
        ))
        }
      </ul>
      <p>---------------------------------------</p>
      <p>Exercicio:</p>
      <br />
      <JsxArrayExer />

    </React.Fragment>
  )
}

export default JsxArray;