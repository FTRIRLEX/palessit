import { FC, CSSProperties } from 'react'
import IcoMoon from 'icomoon-react'
import iconSet from '../../assets/selection.json'
import colors from '../../constants/colors'

interface Props {
  icon: string
  style?: CSSProperties
  color?: string
  size?: number
}

const Icon: FC<Props> = ({ icon, color, size, style }) => {
  return (
    <IcoMoon
      iconSet={iconSet}
      style={style}
      icon={icon}
      color={color || colors.spaceGray}
      size={size || 20}
    />
  )
}

export default Icon
