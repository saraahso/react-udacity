import React from "react";

function ItemList(props) {
  const { items } = props;
  return (
    <div>
      <p className="items">Items</p>
      <ol className="item-list">
        {items.map((item, index) => (
			<li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export default ItemList;