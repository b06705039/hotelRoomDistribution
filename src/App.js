import React from "react";
import NumberPicker from "../containers/NumberPicker";
import NumberPickerProvider from "../hooks/useNumberPicker";
import Styled from "styled-components";
import "./App.css";

const AppDiv = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

function App() {
  return (
    <AppDiv>
      <NumberPickerProvider>
        <NumberPicker />
      </NumberPickerProvider>
    </AppDiv>
  );
}

export default App;
