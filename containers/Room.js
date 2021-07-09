import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import RoomParent from "./RoomParent";
import RoomChildren from "./RoomChildren";
import { useNumberPicker } from "../hooks/useNumberPicker";

const RoomDiv = Styled.div`
`;

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
`;

export default function Room({ distributionIndex }) {
  const { distribution } = useNumberPicker();
  const [number, setNumber] = useState();

  useEffect(() => {
    if (distribution) {
      setNumber(
        () =>
          distribution[distributionIndex].adult +
          distribution[distributionIndex].child
      );
    }
  }, [distribution]);

  return (
    <RoomDiv>
      <Roomtitle>房間：{number}人</Roomtitle>
      <RoomParent distributionIndex={distributionIndex}></RoomParent>
      <RoomChildren distributionIndex={distributionIndex}></RoomChildren>
    </RoomDiv>
  );
}
