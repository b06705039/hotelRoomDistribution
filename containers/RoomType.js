import React from "react";
import Styled from "styled-components";
import PeopleType from "../components/PeopleType";
import PeoplePicker from "../components/PeoplePicker";
import { useNumberPicker } from "../hooks/useNumberPicker";

const RoomTypeDiv = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  width: 343px;
  height: 40px;

  margin: 16px 0px;
`;

const RoomType = ({ distributionIndex, type }) => {
  return (
    <>
      <RoomTypeDiv>
        <PeopleType type={type} />
        <PeoplePicker distributionIndex={distributionIndex} type={type} />
      </RoomTypeDiv>
    </>
  );
};

export default RoomType;
