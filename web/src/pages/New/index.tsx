import { useState } from "react";
import { LatLngExpression } from "leaflet";
import { TileLayer, Marker } from 'react-leaflet'

import { Input } from "../../components/Input";
import { categories } from "./categories";

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

        <MapContainer center={[-3.7172200, -38.5430600] as LatLngExpression} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[-3.7172200, -38.5430600] as LatLngExpression} />
        </MapContainer>

        <Section>Categoria</Section>

        <CategoryContainer>
          {categories.map(category => (
            <CategoryBox
              key={category.key}
              onClick={() => {
                setFormValues(prev => ({...prev, category: category.key}))
              }}
              isActive={fomrValues.category === category.key}
            >
              <CategoryImage src={category.url} />
              {category.label}
            </CategoryBox>
          ))}
        </CategoryContainer>

        <ButtonContainer>
          <Button type="submit">Salvar</Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
}
