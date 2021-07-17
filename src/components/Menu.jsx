import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { MdLibraryBooks, MdCreate } from "react-icons/md";
import { fonteAzul, fonteEscura, fundoClaro, fundoMedio, fundoMedioHover } from './UI/variaveis.style' 

const MenuStyled = styled.aside`
    background: ${fundoClaro};
    grid-area: aside;
    padding: .5rem 0;
    color: ${fonteEscura};
`

const MenuTitulo = styled.h2`
    text-align: center;
    padding: 1rem 0 .5rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 1rem;
    color: ${fonteAzul};
`

const ItemLista = styled.li`
    padding-left: .5rem;
    display: flex;
    align-items: center;

    a {
        padding: .75rem 0;
        padding-left: .5rem;
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
`

export default function Menu(){
    return (
        <MenuStyled>
            <MenuTitulo>Menu</MenuTitulo>
            <ul>
                <ItemLista>
                    <MdLibraryBooks />
                    <Link to="/">Lista de Posts</Link>
                </ItemLista>
                <ItemLista>
                    <MdCreate />
                    <Link to="/novopost">Criar novo Post</Link>
                </ItemLista>
            </ul>
        </MenuStyled>
    )
}
