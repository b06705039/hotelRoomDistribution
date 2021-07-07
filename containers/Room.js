import React from 'react'
import Styled from 'styled-components'
import RoomParent from './RoomParent'
import RoomChildren from './RoomChildren'

const RoomDiv = Styled.div`
`


const Roomtitle = Styled.div`
    position: static;
    width: 343px;
    height: 24px;
    left: 0px;
    top: 0px;

    /* M1/TW Noto Sans TC (500) 16px */

    font-family: Noto Sans TC;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */


    /* Neutral / 09 - #262626 */

    color: #262626;


    /* Inside Auto Layout */

    flex: none;
    order: 0;
    flex-grow: 1;
    // margin: 0px 16px;
`


export default function Room() {

    // const TempPeopleType = [{
    //         type: '大人',
    //         yearFloor: '20'
    //     },{
    //         type: '小孩',
    //         yearFloor: '0'
    //     }
    // ]

    return (
        <RoomDiv>
            <Roomtitle>房間：2人</Roomtitle>
            <RoomParent></RoomParent>
            <RoomChildren></RoomChildren>
            
        </RoomDiv>
    )
}
