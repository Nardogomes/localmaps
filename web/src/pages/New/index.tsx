import { useState } from "react";
import { LatLngExpression } from "leaflet";
import { TileLayer, Marker } from 'react-leaflet'

import { Input } from "../../components/Input";

import {
  Button,
  ButtonContainer,
  CategoryBox,
  CategoryContainer,
  CategoryImage,
  Container,
  Form,
  FormTitle,
  MapContainer,
  Section
} from "./styles";

export function New() {
  const [fomrValues, setFormValues] = useState({
    name: '',
    description: '',
    contact: '',
    category: ''
  });

  return (
    <Container>
      <Form>
        <FormTitle>
          Cadastro do comércio local
        </FormTitle>
        
        <Section>Dados</Section>

        <Input
          label="Nome do local"
          name="name"
          value={fomrValues.name}
          OnChange={setFormValues}
        />

        <Input
          label="Descrição"
          name="description"
          value={fomrValues.description}
          OnChange={setFormValues}
        />

        <Input
          label="Contato"
          name="contact"
          value={fomrValues.contact}
          OnChange={setFormValues}
        />

        <Section>Endereço</Section>

        <MapContainer center={[51.505, -0.09] as LatLngExpression} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[51.505, -0.09] as LatLngExpression} />
        </MapContainer>
      </Form>
    </Container>
  );
}
