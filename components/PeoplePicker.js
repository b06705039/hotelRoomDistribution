import { id } from "postcss-selector-parser";
import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { useNumberPicker } from "../hooks/useNumberPicker";

const PeoplePickerDiv = Styled.div`
    display: flex;
    flex-direction: row;
    padding: 0px;
`;

const ButtonIcon = Styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 8px;

    width: 40px;
    height: 40px;

    background: #FFFFFF;
    opacity: 0.48;

    border: 1px solid #1E9FD2;
    box-sizing: border-box;
    border-radius: 4px;

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
        setInputNum(() => distribution[distributionIndex].adult | 0);
      } else if (type.type === "小孩") {
        setInputNum(() => distribution[distributionIndex].child | 0);
      }
    }
  }, [distribution]);

  return (
    <PeoplePickerDiv>
      <ButtonIcon
        key="minusBtn"
        onClick={(e) => handleChange(e, "minus", distributionIndex, type.type)}
        type="button"
      >
        <Minus></Minus>
      </ButtonIcon>

      <InputForm
        type="text"
        value={inputNum}
        onChange={(e) => handleChange(e, "input", distributionIndex, type.type)}
        onBlur={(e) => handleChange(e, "input", distributionIndex, type.type)}
      />

      <ButtonIcon
        key="plusBtn"
        onClick={(e) => handleChange(e, "plus", distributionIndex, type.type)}
        type="button"
      >
        <Plus></Plus>
      </ButtonIcon>
    </PeoplePickerDiv>
  );
};

export default PeoplePicker;
