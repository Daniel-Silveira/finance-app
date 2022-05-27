import { Modalize } from 'react-native-modalize'

interface Props {
  height?: number
  children?: any
  customRef?: any
}

export const Modal = (props: Props) => {
  return (
    <Modalize adjustToContentHeight ref={props.customRef} modalStyle={{ backgroundColor: '#1A1A2E', paddingTop: '2%' }}>
      {props.children}
    </Modalize>
  )
}

export interface ModalType extends Modalize {}
