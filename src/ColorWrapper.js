import React from "react";
import ColorItem from "./ColorItem";

function ColorWrapper({ colors, handleClick, textColor }) {
  const handleClickItem = (color) => {
    handleClick(color);
  };
  return (
    <div className="color-wrapper">
      {colors.map((color) => (
        <ColorItem color={color} key={color} handleClick={handleClickItem} textColor={textColor}/>
      ))}
    </div>
  );
}

export default ColorWrapper;
