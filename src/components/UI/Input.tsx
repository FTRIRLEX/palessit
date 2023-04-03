import {FC, CSSProperties, HTMLAttributes} from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import Icon from './Icon'

interface InputProps {
  type?: string,
  style?: CSSProperties,
  icon?: string
}

const Input: FC<InputProps & HTMLAttributes<HTMLDivElement>> = ({ icon, type, style, ...props}) => {
  return (
    <LoginInput style={style} {...props}>
    {!!icon && <Icon icon={icon} style={{marginRight: '10px'}}/>}
    <StyledInput type={type} placeholder={props.placeholder}/>
    </LoginInput>
  )
}

const LoginInput = styled.div`
  display: flex;
  border: 2px purple solid;
  background: transparent;
  width: 300px;
  height: 30px;
  border-radius: 13px;
  font-size: 18px;
  text-align: left;
  padding-left: 10px;
  margin-bottom: 25px;
  text-indent: 7px;
  align-items: center;
  &:hover {
    cursor: pointer;
    border-color: ${colors.black};
  }
`
const StyledInput= styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
`

export default Input
