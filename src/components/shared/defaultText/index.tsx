import { marginConfig } from '../../../utils'
import { Text } from './styled'

interface Props {
  margin?: [string, string]
  type?: string
  text?: string
  size?: string
  color?: string
  children?: any
  width?: string
}

export const DefaultText = (props: Props) => {
  const marginRender = marginConfig(props?.margin)
  if (!marginRender) return null
  return (
    <Text marginConfig={marginRender} {...props}>
      {props.text || props.children}
    </Text>
  )
}
