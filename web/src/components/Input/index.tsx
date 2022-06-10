import { Container, InputStyled } from "./styles";

interface InputProps {
  label: string;
  name: string;
  value: string;
  onChangeInput: Function;
}

export function Input({ label, name, value, onChangeInput }: InputProps) {
  return (
    <Container>
      <label>{label}</label>
      <InputStyled
        required
        name={name}
        value={value}
        onChange={ev => {
          onChangeInput((previousState: any) => ({
            ...previousState,
            [name]: ev.target.value
          }))
        }}
      />
    </Container>
  );
}
