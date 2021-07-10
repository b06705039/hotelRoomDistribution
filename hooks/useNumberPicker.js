import React, { useContext, useState, useEffect } from "react";
import propTypes from "prop-types";
import { data } from "../src/TestData";

const NumberPickerData = React.createContext();

export function useNumberPicker() {
  return useContext(NumberPickerData);
}

function NumberPickerProvider({ children }) {
  const types = [
    {
      type: "大人",
      yearFloor: 20,
    },
    {
      type: "小孩",
      yearFloor: 0,
    },
  ];

  const [number, setNumber] = useState(data[1].number);
  const [rooms, setRooms] = useState(data[1].rooms);
  const [distribution, setDistribution] = useState();

  useEffect(() => {
    let updateDistributtionArr = [];
    let remainNum = number;
    rooms.map((room) => {
      let adultNum = 0;
      let childNum = 0;
      if (remainNum > 0) {
        adultNum = Math.min(room.min, remainNum);
        remainNum -= room.max;
      }
      updateDistributtionArr.push({
        adult: adultNum,
        child: childNum,
      });
    });
    setDistribution(() => updateDistributtionArr);
  }, []);

  const value = {
    number,
    setNumber,
    rooms,
    setRooms,
    distribution,
    setDistribution,
    types,
  };

  return (
    <NumberPickerData.Provider value={value}>
      {children}
    </NumberPickerData.Provider>
  );
}

NumberPickerProvider.propTypes = {
  number: propTypes.number,
  rooms: propTypes.arrayOf(
    propTypes.shape({
      min: propTypes.number,
      max: propTypes.number,
    })
  ),
};
export default NumberPickerProvider;
