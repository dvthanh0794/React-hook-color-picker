import React, { useCallback } from "react";

function ColorItem({ color, handleClick, textColor }) {
  const handleClickItem = useCallback(() => {
    handleClick(color);
  }, [handleClick, color]);

  const itemClass = textColor === color ? 'color-item active' : 'color-item';
  
  return (
	<div
	  className={itemClass}
	  style={{
		backgroundColor: color,
	  }}
	  onClick={handleClickItem}
	>
	  {" "}
	</div>
  );
}

export default ColorItem;
