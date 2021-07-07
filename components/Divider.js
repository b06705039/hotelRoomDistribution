import React from 'react'
import Styled from 'styled-components'

const DividerDiv = Styled.div`
    position: static;
    width: 343px;
    height: 1px;
    left: calc(50% - 343px/2);
    top: 55.64%;
    bottom: 44.09%;

    /* opacity / 8% / neutral 10 */

    background: rgba(0, 0, 0, 0.08);
    mix-blend-mode: normal;

    /* Inside Auto Layout */

    flex: none;
    order: 4;
    align-self: stretch;
    flex-grow: 0;
    margin: 16px 0px;
`

export default function Divider() {
    return (
        <DividerDiv></DividerDiv>
    )
}
