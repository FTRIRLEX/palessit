import { FC, CSSProperties } from 'react';
import styled from 'styled-components';
import colors from '../../constants/colors';
import Icon from './Icon';

interface InputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  style?: CSSProperties;
  iconStyle?: CSSProperties;
  icon?: string;
  placeholder?: string;
}

const Input: FC<InputProps> = ({
  icon,
  type,
  style,
  iconStyle,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <LoginInput style={style}>
      {!!icon && <Icon icon={icon} style={iconStyle} />}
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </LoginInput>
  );
};

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
`;
const StyledInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
`;

export default Input;
