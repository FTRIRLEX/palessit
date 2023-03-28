import styled from 'styled-components'
import { FC, CSSProperties, HTMLAttributes } from 'react'
import colors from '../../constants/colors'
import Icon from './Icon'

interface ButtonProps {
  icon?: string,
  text: string,
  style?: CSSProperties
}

const Button: FC<ButtonProps & HTMLAttributes<HTMLButtonElement>> = ({ icon, text, style, ...props }) => {
  return (
    <StyledButton style={style} {...props}>
      {!!icon && <Icon icon={icon} style={{marginRight: '10px'}} color={style?.color}/>}
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
  border: 2px solid ${colors.purple} ;
  font-size: 18px;
  text-align: center;
  margin-bottom: 30px;
  &:hover {
    cursor: pointer;
  }
`

export default Button

