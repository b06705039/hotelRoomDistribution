import React, { useContext, useState, useEffect } from "react";
import propTypes from "prop-types";
import { data } from "../src/TestData";

const NumberPickerData = React.createContext();

export function useNumberPicker() {
  return useContext(NumberPickerData);
}

const deepCopyDistribution = (arr) => {
  let newArr = [];
  arr.map((ele) => {
    let element = JSON.stringify(ele);
    newArr.push(JSON.parse(element));
  });

  return newArr;
};

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

  const [number, setNumber] = useState(data[2].number);
  const [rooms, setRooms] = useState(data[2].rooms);
  const [distribution, setDistribution] = useState();

  const handleDistribution = () => {
    let updateDistributtionArr = [];
    let remainNum = number;
    rooms.map((room) => {
      let adultNum = 0;
      let childNum = 0;
      if (remainNum > 0) {
        adultNum = Math.min(room.min, remainNum);
        remainNum -= adultNum;
      }
      updateDistributtionArr.push({
        adult: adultNum,
        child: childNum,
      });
    });
    setDistribution(() => updateDistributtionArr);
  };

  const handleChange = (e, changeType, roomId, type) => {
    let updateDistribution = deepCopyDistribution(distribution);
    let changeValue = 0;
    let pairValue = 0;

    // read current value
    if (type === "大人") {
      changeValue = updateDistribution[roomId].adult;
      pairValue = updateDistribution[roomId].child;
    } else if (type === "小孩") {
      changeValue = updateDistribution[roomId].child;
      pairValue = updateDistribution[roomId].adult;
    }

    // get new value
    if (changeType === "input") {
      changeValue = parseInt(e.target.value | "0");
    } else if (changeType === "minus") {
      changeValue -= 1;
    } else if (changeType === "plus") {
      changeValue += 1;
    }

    // check if in range
    if ((changeValue + pairValue > rooms[roomId].max) | (changeValue < 0)) {
      return;
    }

    if (type === "大人") {
      updateDistribution[roomId].adult = changeValue;
    } else if (type === "小孩") {
      updateDistribution[roomId].child = changeValue;
    }
    console.log("update dis:", updateDistribution);
    setDistribution(() => updateDistribution);
  };

  useEffect(() => {
    handleDistribution();
  }, []);

  const value = {
    number,
    setNumber,
    rooms,
    setRooms,
    distribution,
    setDistribution,
    types,
    handleChange,
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
