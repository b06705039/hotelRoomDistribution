import { id } from "postcss-selector-parser";
import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { useNumberPicker } from "../hooks/useNumberPicker";

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

`;

const LeftButtonIcon = Styled.button`
    /* Auto Layout */

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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
`;

const InputForm = Styled.input`
    display: flex;
    padding: 10px 4px;
    text-align: center;

    font-family: Noto Sans;
    font-style: normal;
    font-weight: normal;

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
`;

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
`;

const Minus = Styled.div`
    width: 19.71px;
    height: 1.29px;
    display: flex;

    background: #1E9FD2;
`;

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
`;

const PeoplePicker = ({ distributionIndex, type }) => {
  const { distribution, handleChange } = useNumberPicker();
  const [inputNum, setInputNum] = useState();

  useEffect(() => {
    if (distribution) {
      if (type.type === "大人") {
        setInputNum(() => distribution[distributionIndex].adult);
      } else if (type.type === "小孩") {
        setInputNum(() => distribution[distributionIndex].child);
      }
    }
  });

  return (
    <PeoplePickerDiv>
      <LeftButtonIcon
        key="minusBtn"
        onClick={(e) => handleChange(e, "minus", distributionIndex, type.type)}
        type="button"
      >
        <Minus></Minus>
      </LeftButtonIcon>

      <InputForm
        type="text"
        defaultValue={inputNum}
        onChange={(e) => handleChange(e, "input", distributionIndex, type.type)}
      />

      <RightButtonIcon
        key="plusBtn"
        onClick={(e) => handleChange(e, "plus", distributionIndex, type.type)}
        type="button"
      >
        <Plus></Plus>
      </RightButtonIcon>
    </PeoplePickerDiv>
  );
};

export default PeoplePicker;
