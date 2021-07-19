import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";
import { fonteAzul } from "../components/UI/variaveis.style";

const Artigo = styled.article`
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  margin: 1rem;
  height: fit-content;
  padding: 0.5rem;
  position: relative;
`;

const GridArtigos = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: auto;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const CabecalhoArtigo = styled.header`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.75rem;
  font-size: 1.5rem;
`;

export default function ListaDePosts() {
  const [artigos, setArtigos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/artigos")
      .then((res) => res.json())
      .then((data) => setArtigos(data));
  }, []);

  const deletaArtigo = (id) => {
    fetch("http://localhost:8000/artigos/" + id, {
        method: "DELETE"
    })

    const novoArray = artigos.filter(artigo => artigo.id !== id)
    setArtigos(novoArray)
  };

  return (
    <GridArtigos>
      {artigos.map((artigo) => (
        <Artigo key={artigo.id}>
          <CabecalhoArtigo>
            <h4>{artigo.titulo}</h4>
            <MdDelete
              style={{ cursor: "pointer", color: fonteAzul }}
              onClick={() => deletaArtigo(artigo.id)}
            />
          </CabecalhoArtigo>
          <p>{artigo.corpo}</p>
        </Artigo>
      ))}
    </GridArtigos>
  );
}
