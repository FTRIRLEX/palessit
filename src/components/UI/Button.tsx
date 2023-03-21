import styled, { CSSProperties } from 'styled-components'
import { FC } from 'react'

interface ButtonProps {
  onClick?: () => void,
  text: string,
  style?: CSSProperties
}

const Button: FC<ButtonProps> = ({ text, style, ...props } : ButtonProps) => {
  return (
    <StyledButton style={style} {...props}>
      {text}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  background: transparent;
  padding-left: 10px;
  padding-right: 10px;
  height: 30px;
  width: 300px;
  border-radius: 13px;
  border: 2px purple solid;
  font-size: 18px;
  text-align: center;
  margin-bottom: 30px;
  &:hover {
    cursor: pointer;
  }
`

export default Button

