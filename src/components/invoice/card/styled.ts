import styled from "styled-components/native";

export const Card = styled.TouchableOpacity`
  width: 94%;
  background-color: #263859;
  flex-direction: row;
  padding: 1% 2%;
  border-radius: 12px;
  margin: 1% 3%;
  align-items: center;
`;

export const BoxIcon = styled.View`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: #1a1a2e;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0.5%;
`;

export const WrapperContent = styled.View`
  margin: 1%;
  flex: 1;
`;

export const WrapperName = styled.View`
  flex-direction: row;
  align-items: center;
`;
