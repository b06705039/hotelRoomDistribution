import React, { useContext, useState } from 'react'
import propTypes from 'prop-types'
import { data } from '../src/TestData'

const NumberPickerData = React.createContext()

export function useNumberPicker(){
    return useContext(NumberPickerData)
}

function NumberPickerProvider({children}) {

    const [ number, setNumber ] = useState(data[1].number)
    const [ rooms, setRooms ] = useState(data[1].rooms)

    const value = {
        number,
        setNumber,
        rooms,
        setRooms
    }


    return (
        <NumberPickerData.Provider value={value}>
            {children}
        </NumberPickerData.Provider>
    )
}

NumberPickerProvider.propTypes = {
    number: propTypes.number,
    rooms: propTypes.arrayOf(propTypes.shape({
        min: propTypes.number,
        max: propTypes.number
    }))
}
export default NumberPickerProvider

