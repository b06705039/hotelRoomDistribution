import React from "react";
import Styled from "styled-components";

const DividerDiv = Styled.div`
    width: 343px;
    height: 1px;

    background: rgba(0, 0, 0, 0.08);
    mix-blend-mode: normal;

    margin: 16px 0px;
`;

export default function Divider() {
  return <DividerDiv></DividerDiv>;
}
