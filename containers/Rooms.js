import React from "react";
import Styled from "styled-components";
import Room from "./Room";
import Divider from "../components/Divider";
import { useNumberPicker } from "../hooks/useNumberPicker";

const RoomsDiv = Styled.div`
`;

export default function rooms() {
  const { rooms } = useNumberPicker();

  return (
    <RoomsDiv>
      {rooms.map((room, index) => (
        <div key={index}>
          <Room distributionIndex={index} />
          <Divider />
        </div>
      ))}
    </RoomsDiv>
  );
}
