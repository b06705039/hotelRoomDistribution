import React from 'react'
import Styled from 'styled-components'

const PeopleTypeDiv = Styled.div`
    /* Auto Layout */

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 191px;
    height: 40px;
    left: 0px;
    top: 0px;

    border-radius: 4px;

    /* Inside Auto Layout */

    flex: none;
    order: 0;
    flex-grow: 1;
    // margin-left: 16px;
`

const Title = Styled.div`
    position: static;
    width: 191px;
    height: 20px;
    left: 0px;
    top: 0px;

    /* P2 / TW Noto Sans TC (400) 14px */

    font-family: Noto Sans TC;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */


    /* Neutral / 09 - #262626 */

    color: #262626;


    /* Inside Auto Layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 0px;
`

const Annotation = Styled.div`
    position: static;
    width: 191px;
    height: 20px;
    left: 0px;
    top: 20px;

    /* P2 / EN Noto Sans (400) 14px */

    font-family: Noto Sans TC;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */


    /* Neutral / 07 - #8C8C8C */

    color: #8C8C8C;


    /* Inside Auto Layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 0px;
`



export default function PeopleType({type}) {

    return (
        <PeopleTypeDiv>
           <Title>{type.type}</Title>
           <Annotation>年齡{type.yearFloor}＋</Annotation>
        </PeopleTypeDiv>
    )
}
