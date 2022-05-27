import styled from 'styled-components/native'

export const Touchable = styled.TouchableOpacity`
  width: ${({ width }: { width: string }) => width || '100%'};
  background-color: #263859;
  padding: 5% 3%;
  border-radius: 6px;
  color: #fff;
  align-items: center;
  border-width: 1px;
  border-color: #263859;
`