import React from "react";
import { useNumberPicker } from "../hooks/useNumberPicker";
import Styled from "styled-components";

const TitleDiv = Styled.div`
    width: 343px;
    height: 28px;

    font-family: Noto Sans TC;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;

    color: #262626;
    margin: 8px 0px;

`;

export default function Title() {
  const { number, rooms } = useNumberPicker();

  return (
    <TitleDiv>
      住客人數：{number}人／{rooms.length}房
    </TitleDiv>
  );
}
