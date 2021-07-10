import React from "react";
import Styled from "styled-components";

const PeopleTypeDiv = Styled.div`

    display: flex;
    flex-direction: column;
    padding: 0px;

    width: 191px;
    height: 40px;

    border-radius: 4px;
`;

const Title = Styled.div`
    width: 191px;
    height: 20px;

    font-family: Noto Sans TC;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;

    color: #262626;
`;

const Annotation = Styled.div`
    width: 191px;
    height: 20px;

    font-family: Noto Sans TC;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;

    color: #8C8C8C;
`;

export default function PeopleType({ type }) {
  return (
    <PeopleTypeDiv>
      <Title>{type.type}</Title>
      <Annotation>年齡{type.yearFloor}＋</Annotation>
    </PeopleTypeDiv>
  );
}
