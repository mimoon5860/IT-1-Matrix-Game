import React, { useEffect, useState } from 'react';

const Box = ({ restValue, setRestValue, box }) => {
    const [value, setValue] = useState(restValue);
    const [color, setColor] = useState("blue");
    const [display, setDisplay] = useState("0");
    const HandleBox = () => {
        setValue(restValue)
        setColor("red");
        setDisplay("1");
    }

    const boxValue = {
        opacity: `${display}`
    }
    const boxStyle = {
        backgroundColor: `${color}`
    }

    useEffect(() => {
        setRestValue(value + 1);
    }, [value, setRestValue])


    return (
        <div style={boxStyle} className="box" onClick={HandleBox}>
            <span style={boxValue} >
                {box + value}
            </span>
        </div>
    );
};


export default Box;