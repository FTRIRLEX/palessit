import { FC, useState } from 'react'
import Text from './Text'
import Button from './Button'
import styled from 'styled-components'
import colors from '../../constants/colors'

interface Props {
  text: string
}

const EditableText: FC<Props> = ({ text }) => {
  const [isEditing, setIsEditing] = useState(false)
  return (
    <Container>
      {isEditing ? (
        <>
          <input
            type='text'
            onChange={(e) => console.log(e.target.value)}
            defaultValue={text}
            style={{ width: '300px' }}
          />
          <Button
            icon='checkmark'
            onClick={() => setIsEditing(false)}
            style={{
              width: 'auto',
              color: colors.blue,
              border: 'none',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </>
      ) : (
        <>
          <Text text={text} style={{ width: '300px', color: colors.black }} />
          <Button
            icon='pencil'
            onClick={() => setIsEditing(true)}
            style={{
              width: 'auto',
              color: colors.blue,
              border: 'none',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

export default EditableText
