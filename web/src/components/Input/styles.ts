import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
`;

export const InputStyled = styled.input`
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  height: 28px;
  font-size: 24px;
  padding: 10px;
`;
