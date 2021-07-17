import React from 'react'
import styled from 'styled-components'
import { MdCopyright } from "react-icons/md";

import { fonteClara, fundoEscuro } from './UI/variaveis.style'

const FooterStyled = styled.footer`
    background: ${fundoEscuro};
    color: ${fonteClara};
    grid-area: footer;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .9rem;

    svg {
        margin-right: .25rem;
    }
`

export default function Footer() {
    return (
        <FooterStyled>
            <MdCopyright /> Copyright - 2021
        </FooterStyled>
    )
}
