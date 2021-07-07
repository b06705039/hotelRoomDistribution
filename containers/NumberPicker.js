import React from 'react'
import Title from '../components/Title'
import Rooms from './Rooms'
import Styled from 'styled-components'

const NumberPickerDiv = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    box-sizing: border-box;

    position: relative;
    width: 375px;
    height: 381px;

    background: #FFFFFF;

    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16);
    border-radius: 4px;
`

export default function NumberPicker () {
    return (
        <NumberPickerDiv>
            <Title/>
            <Rooms/>
        </NumberPickerDiv>
    )
}
