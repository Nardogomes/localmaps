import { useState } from "react";
import { Marker, TileLayer } from 'react-leaflet';

import { Input } from "../../components/Input";

import {
  Container,
  Button,
  ButtonContainer,
  CategoryBox,
  CategoryContainer,
  CategoryImage,
  Form,
  FormTitle,
  MapContainer,
  Section
} from "./styles";

export function New() {
  const [formValues, setFormValues] = useState({
    name: '',
    description: '',
    contact: '',
    category: ''
  });

  return (
    <Container>
      <Form>
        <FormTitle>Cadastro de comércio local</FormTitle>

        <Section>Dados</Section>

        <Input
          label="Nome do local"
          name="name"
          value={formValues.name}
          onChangeInput={setFormValues}
        />

        <Input
          label="Descrição"
          name="description"
          value={formValues.description}
          onChangeInput={setFormValues}
        />

        <Input
          label="Contato"
          name="contact"
          value={formValues.contact}
          onChangeInput={setFormValues}
        />

        <Section>Endereço</Section>

        <MapContainer center={[-3.722847, -38.525111]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-3.722847, -38.525111]} />
        </MapContainer>

      </Form>
    </Container>
  );
}
