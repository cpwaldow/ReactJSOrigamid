import React from 'react'
import Button from './Button'
import Input from './Input'

function Form() {
  return (
    <div>
      <Input label='Email' id='email' required/>
      <Input label='Senha' id='senha' type='password'/>
      <Button />
    </div>
  )
}

export default Form
