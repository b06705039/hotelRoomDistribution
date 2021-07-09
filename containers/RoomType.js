import React from "react";
import styled from "@emotion/react";
import PeopleType from "../components/PeopleType";
import PeoplePicker from "../components/PeoplePicker";
import { useNumberPicker } from "../hooks/useNumberPicker";

const RoomTypeDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  width: 343px;
  height: 40px;

  margin: 16px 0px;
`;

export default function RoomType({ distributionIndex }) {
  const { types } = useNumberPicker();

  return (
    <>
      {types.map((type, index) => (
        <RoomTypeDiv key={index}>
          <PeopleType type={type} />
          <PeoplePicker distributionIndex={distributionIndex} type={type} />
        </RoomTypeDiv>
      ))}
    </>
  );
}
