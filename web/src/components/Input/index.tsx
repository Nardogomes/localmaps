import { Container, InputStyled } from "./styles";

interface InputProps {
  label: string;
  name: string;
  value: string;
  OnChange: Function;
}

export function Input({ label, name, value, OnChange }: InputProps) {
  return (
    <Container>
      <label>{label}</label>
      <InputStyled
        required
        name={name}
        value={value}
        onChange={ev => {
          OnChange((previousState: any) => ({
            ...previousState,
            [name]: ev.target.value
          }));
        }}
      />
    </Container>
  );
}
