import React from 'react'
import Styled from 'styled-components'
import PeopleType from '../components/PeopleType'
import PeoplePicker from '../components/PeoplePicker'

const RoomChildrenDiv = Styled.div`
    /* Auto Layout */

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 343px;
    height: 40px;
    left: 16px;
    top: 325px;


    /* Inside Auto Layout */

    flex: none;
    order: 7;
    align-self: stretch;
    flex-grow: 0;
    margin: 16px 0px;
`

export default function RoomChildren() {

    const type={
        type: ' 小孩',
        yearFloor: 0
    }

    return (
            <RoomChildrenDiv>
                <PeopleType type={type}/>
                <PeoplePicker/>
            </RoomChildrenDiv>
    )
}
