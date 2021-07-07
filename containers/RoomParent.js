import React from 'react'
import Styled from 'styled-components'
import PeopleType from '../components/PeopleType'
import PeoplePicker from '../components/PeoplePicker'

const RoomParentDiv = Styled.div`
    /* Auto Layout */

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 343px;
    height: 40px;
    left: 16px;
    top: 269px;


    /* Inside Auto Layout */

    flex: none;
    order: 6;
    align-self: stretch;
    flex-grow: 0;
    margin: 16px 0px;
`

export default function RoomParent() {

    const type={
        type: ' 大人',
        yearFloor: 20
    }

    return (
            <RoomParentDiv>
                <PeopleType type={type}/>
                <PeoplePicker/>
            </RoomParentDiv>
    )
}
