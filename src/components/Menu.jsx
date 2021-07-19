import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { MdLibraryBooks, MdCreate } from "react-icons/md";
import {
  fonteAzul,
  fonteEscura,
  fundoClaro,
  fundoMedioHover,
} from "./UI/variaveis.style";

const MenuStyled = styled.aside`
  background: ${fundoClaro};
  grid-area: aside;
  padding: 0.5rem 0;
  color: ${fonteEscura};
`;

const MenuTitulo = styled.h2`
  text-align: center;
  padding: 1rem 0 0.5rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 1rem;
  color: ${fonteAzul};
`;

const ItemLista = styled.li`
  padding-left: 0.5rem;
  display: flex;
  align-items: center;

  a {
    padding: 0.75rem 0;
    padding-left: 0.5rem;
    color: inherit;
    flex: 1;
    font-weight: 500;
  }

  svg {
    pointer-events: none;
  }

  &:hover {
    background: ${fundoMedioHover};
  }
`;

export default function Menu() {
  const location = useLocation();
  const menuLinks = [
    {
      nome: "Lista de Posts",
      icone: <MdLibraryBooks />,
      endereco: "/",
    },
    {
      nome: "Criar novo Post",
      icone: <MdCreate />,
      endereco: "/novopost",
    },
  ];

  return (
    <MenuStyled>
      <MenuTitulo>Menu</MenuTitulo>
      <ul>
        {menuLinks.map((link, key) => (
          <ItemLista
            ke={key}
            style={
              location.pathname === link.endereco
                ? { backgroundColor: "#333", color: "#fff" }
                : null
            }
          >
            {link.icone}
            <Link exact to={link.endereco}>
              {link.nome}
            </Link>
          </ItemLista>
        ))}
      </ul>
    </MenuStyled>
  );
}
