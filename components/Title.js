import React from 'react'
import { useNumberPicker } from '../hooks/useNumberPicker'
import Styled from 'styled-components'


const TitleDiv = Styled.div`
    /* title */

    position: static;
    width: 343px;
    height: 28px;
    left: calc(50% - 343px/2);
    top: calc(50% - 28px/2);

    /* H4 / TW Noto Sans TC (700) 20px */

    font-family: Noto Sans TC;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    /* identical to box height, or 140% */


    /* Neutral / 09 - #262626 */

    color: #262626;


    /* Inside Auto Layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 8px 0px;

`




export default function Title() {

    const { number, rooms } = useNumberPicker();

    return (
        <TitleDiv>
            住客人數：{number}人／{rooms.length}房
        </TitleDiv>
    )
}
