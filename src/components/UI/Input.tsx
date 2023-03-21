import {FC} from 'react'
import styled, { CSSProperties } from 'styled-components'

interface InputProps {
  type?: string,
  placeholder?: string,
  style?: CSSProperties
}

const Input: FC<InputProps> = ({type, style, ...props} : InputProps) => {
  return (
    <LoginInput type = {type} style={style} {...props}/>
  )
}

const LoginInput = styled.input`
  display: flex;
  border: 2px purple solid;
  background: transparent;
  width: 300px;
  height: 30px;
  border-radius: 13px;
  font-size: 18px;
  text-align: left;
  padding-left: 10px;
  margin-bottom: 30px;
  text-indent: 7px;
`

export default Input
