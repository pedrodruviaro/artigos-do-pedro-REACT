import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  fonteAmarela,
  fonteAzul,
  fonteClara,
} from "../components/UI/variaveis.style";

const FormularioWrap = styled.section`
  grid-area: "principal";
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FormularioStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const FormTitle = styled.h2`
  padding-bottom: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  margin-bottom: 0.75rem;
  border-radius: 5px;
  outline: none;
  border: 2px solid ${fonteAzul};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  transition: all 0.2s ease;

  &:focus {
    border-color: ${fonteAmarela};
  }
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  margin-bottom: 0.75rem;
  border-radius: 5px;
  outline: none;
  border: 2px solid ${fonteAzul};
  min-height: 250px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  transition: all 0.2s ease;

  &:focus {
    border-color: ${fonteAmarela};
  }
`;

const Botao = styled.button`
  padding: 0.25rem;
  font-size: 1rem;
  border-radius: 5px;
  outline: none;
  border: 2px solid ${fonteAzul};
  background: ${fonteAzul};
  color: ${fonteClara};
  font-weight: 600;
  cursor: pointer;
  width: 150px;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transition: all 0.2s ease;

  &:hover,
  &:focus {
    background: transparent;
    color: ${fonteAzul};
  }
`;

export default function Formulario() {
  const [titulo, setTitulo] = useState("");
  const [corpo, setCorpo] = useState("");

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/artigos", {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({ titulo, corpo })
    })

    history.push("/")

  };

  return (
    <FormularioWrap>
      <FormTitle>Novo Artigo</FormTitle>
      <FormularioStyled onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <Textarea
          placeholder="Comece a escrever"
          value={corpo}
          onChange={(e) => setCorpo(e.target.value)}
        ></Textarea>
        <Botao type="submit">Enviar</Botao>
      </FormularioStyled>
    </FormularioWrap>
  );
}
