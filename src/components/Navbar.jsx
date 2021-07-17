import React from 'react'
import styled from 'styled-components'
import { ImRss } from "react-icons/im";
import { fonteAmarela, fonteClara, fundoEscuro } from './UI/variaveis.style' 

const Cabecalho = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: .75rem;
    grid-area: header;

    background-color: ${fundoEscuro};
    color: ${fonteClara};
`

const CabecalhoTitulo = styled.h1`
    flex: 1;
    text-align: center;

    &::before {
        content: "< ";
        color: ${fonteAmarela};
    }

    &::after {
        content: " />";
        color: ${fonteAmarela};
    }
`
const IconeWrap = styled.div`
    width: 50px;
    text-align: center;
`

export default function Navbar() {
    return (
        <Cabecalho>
            <IconeWrap style={{color: fonteAmarela}}>
                <ImRss />
            </IconeWrap>
            <CabecalhoTitulo>Artigos do Pedro</CabecalhoTitulo>
        </Cabecalho>
    )
}
