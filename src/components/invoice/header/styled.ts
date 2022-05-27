import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 3% 2%;
  margin-bottom: 5%;
  border-bottom-width: 1px;
  border-color: #263859;
`

export const WrapperMonths = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-width: 23%;
`

export const BoxIcon = styled.TouchableOpacity`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: #263859;
  align-items: center;
  justify-content: center;
`

export const SpaceIcon = styled.View`
  width: 34px;
  height: 34px;
`
