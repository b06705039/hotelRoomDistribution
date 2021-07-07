import React from 'react'
import Styled from 'styled-components'

const PeoplePickerDiv = Styled.div`
    /* Auto Layout */

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 136px;
    height: 40px;
    left: 207px;
    top: 0px;


    /* Inside Auto Layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    // margin: 0px 16px;

`

const LeftButtonIcon = Styled.button`
    /* Auto Layout */

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 8px;

    width: 40px;
    height: 40px;

    /* Neutral / 01 - #FFFFFF */

    background: #FFFFFF;
    opacity: 0.48;
    /* Primary / 06 - #1E9FD2 */

    border: 1px solid #1E9FD2;
    box-sizing: border-box;
    border-radius: 4px;

    /* Inside Auto Layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 4px;
`

const InputForm = Styled.input`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px 4px;

    width: 40px;
    height: 40px;

    border: 1px solid #BFBFBF;
    box-sizing: border-box;
    border-radius: 4px;

    /* Inside Auto Layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 4px;
`
const RightButtonIcon = Styled.button`

    /* Auto Layout */

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 8px;


    width: 40px;
    height: 40px;

    background: #FFFFFF;
    /* Primary / 06 - #1E9FD2 */

    border: 1px solid #1E9FD2;
    box-sizing: border-box;
    border-radius: 4px;

    /* Inside Auto Layout */

    flex: none;
    order: 2;
    flex-grow: 0;
    margin: 0px 4px;
`

const ButtonSignBlock = Styled.div`
    position: static;
    width: 24px;
    height: 24px;

    display: flex;
    align-items: center;
    justify-content: center;
    order: 0;
`

const Minus = Styled.div`
    width: 19.71px;
    height: 1.29px;
    display: flex;

    background: #1E9FD2;
`


const Plus = Styled.div`
    display:flex;
    width: 19.71px;
    height: 19.71px;

    background:
        linear-gradient(#1E9FD2,#1E9FD2),
        linear-gradient(#1E9FD2,#1E9FD2);
    background-position:center;
    background-size: 19.71px 1.29px, 1.29px 19.71px;
    background-repeat:no-repeat;
`

export default function PeoplePicker() {
    return (
        <PeoplePickerDiv>
            <LeftButtonIcon>
                <ButtonSignBlock>
                    <Minus />
                </ButtonSignBlock>
            </LeftButtonIcon>

            <InputForm type="text" />
                {/* <input type="text" name="inputNumber" /> */}

            <RightButtonIcon>
                {/* <ButtonSignBlock> */}
                    <Plus/>
                {/* </ButtonSignBlock> */}
            </RightButtonIcon>
        </PeoplePickerDiv>
    )
}
