import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("./home-background.svg) no-repeat 700px bottom;
  background-color: ${(props) => props.theme.background};
  display: flex;
`;

export const Title = styled.h1`
  font-size: 3.37rem;
  padding-bottom: 3.12rem;
  text-align: center;
`;
