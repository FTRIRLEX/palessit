import IcoMoon from 'icomoon-react';
import { CSSProperties, FC } from 'react';
import iconSet from '../../assets/selection.json';
import colors from '../../constants/colors';

interface IconProps {
  icon: string;
  style?: CSSProperties;
  color?: string;
  size?: number;
}

const Icon: FC<IconProps> = ({ icon, color, size, style }) => {
  return (
    <IcoMoon
      iconSet={iconSet}
      style={style}
      icon={icon}
      color={color || colors.spaceGray}
      size={size || 20}
    />
  );
};

export default Icon;
