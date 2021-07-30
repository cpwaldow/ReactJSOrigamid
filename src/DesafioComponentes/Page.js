import React from 'react'
import Menu from './Menu';
import Home from './Home';
import Produtos from './Produtos';

function Page() {
  const { pathname } = window.location

  let Component;
  if(pathname === '/produtos') {
    Component = Produtos;
  } else {
    Component = Home;
  }

  return (
    <div>
      <Menu />
      <Component />
    </div>
  )
}

export default Page
